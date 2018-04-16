import { Modal } from './modal.model';
import { Injectable } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { Injector } from '@angular/core';
import { ComponentRef } from '@angular/core';
import { Type } from '@angular/core';
import { Component } from '@angular/core';
import { ApplicationRef } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Rx';

import { ModalSuperComponent } from './modal-super.component';

@Injectable()
export class ModalService {

  private modaisOpened = [] as Modal<any, any>[];

  constructor(
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  public addModal<Parametros, Resposta>(
    component: Type<ModalSuperComponent<Parametros, Resposta>>,
    parametros?: Parametros
  ): Observable<Resposta> {

    // Cria o component dinamicamente.
    const componentRef = this.factoryModalComponent(component, parametros);

    // Cria o listener que irá disparar quando o modal for fechado,
    // E junto com o disparo vai o valor que o modal irá retornar para quem o abriu
    const novoListenersDestroyComponent = new Subject<Resposta>();

    // Cria uma instância do modal para colocar em memória e gerenciar o mesmo.
    const novoModal: Modal<any, Resposta> = {
      component: componentRef,
      closeSubject: novoListenersDestroyComponent
    };

    // Adiciona um dispara de função que irá executar quando o component for destruído
    componentRef.onDestroy(() => {
      if (componentRef.instance) {
        novoListenersDestroyComponent.next(componentRef.instance.resposta);
      }
    });

    // Guarda em memória o modal
    this.modaisOpened.push(novoModal);

    // Manda o modal aparecer na tela.
    this.addModalInTopOfApplication(componentRef);

    return novoListenersDestroyComponent.asObservable();
  }

  public fecharModal<T extends ModalSuperComponent<any, any>>(modal: T): void {
    const index = this.modaisOpened.findIndex(
      (modalOpened) => modalOpened.component.instance === modal
    );

    if (index > -1) {
      this.modaisOpened[index].component.destroy();
      this.applicationRef.detachView(this.modaisOpened[index].component.hostView);
    }
  }

  private addListenersToModalComponent<T extends ModalSuperComponent<any, Resposta>, Resposta>(
    component: ComponentRef<T>
  ): ComponentRef<T> {

    const novoListenersDestroyComponent = new Subject<Resposta>();

    const novoModal: Modal<any, Resposta> = {
      component: component,
      closeSubject: novoListenersDestroyComponent
    };

    component.onDestroy(() => {
      if (component.instance) {
        novoListenersDestroyComponent.next(component.instance.resposta);
      }
    });

    this.modaisOpened.push(novoModal);

    return component;
  }

  /**
   * Irá pegar o top da aplicação e mandar aparecer o modal na tela
   * @param component
   */
  private addModalInTopOfApplication<T extends ModalSuperComponent<any, any>>(
    component: ComponentRef<T>
  ): void {
    this.applicationRef.attachView(component.hostView);

    this.applicationRef.components[0].location.nativeElement.appendChild((component.hostView as any).rootNodes[0]);
  }

  /**
   * Cria o component dinamicamente e
   * adiciona os parâmetros (como se fosse uma informação que precisa passar para o modal)
   * nesse modal
   * @param component
   * @param parametros
   */
  private factoryModalComponent<T extends ModalSuperComponent<Parametros, any>, Parametros>(
    component: Type<T>,
    parametros: Parametros
  ): ComponentRef<T> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    const componentRef = componentFactory.create(this.injector);

    const instancia = componentRef.instance;

    if (instancia) {
      instancia.parametros = parametros;
    }

    return componentRef;
  }

}
