import { IModuloCadastroModal } from './../cadastro/modulo-cadastro-modal.component';
import { ModalService } from '../../../components/modal/modal.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { Paginacao } from '../../../models/paginacao/paginacao.model';
import { Modulo } from '../../../models/funcionalidade/modulo.model';
import { AModuleService } from '../../../services-abstract/modulo.service';
import { ModuloCadastroModalComponent } from '../cadastro/modulo-cadastro-modal.component';

@Component({
  selector: 'help-bot-modulo-visualizacao',
  templateUrl: './modulo-visualizacao.component.html'
})
export class ModuloVisualizacaoComponent {

  public fontAwesomePencil = faPencilAlt;
  public fontAwesomePlusCircle = faPlusCircle;
  public fontAwesomeTimeCircle = faTimesCircle;

  public modulos = [] as Modulo[];

  constructor(
    private moduleService: AModuleService,
    private router: Router,
    private modalService: ModalService
  ) {
    this.buscarTodos();
  }

  public editar(modulo: Modulo): void {
    this.router.navigate([`/app/modulo-cadastro/${modulo.id}`]);
  }

  public criar(modulo?: Modulo): void {
    if (!modulo) {
      modulo = new Modulo();
    }

    this.modalService.addModal<IModuloCadastroModal, void>(
      ModuloCadastroModalComponent,
      { modulo: modulo }
    ).subscribe(() => {
      this.buscarTodos();
    });
  }

  public remover(modulo: Modulo): void {
    this.moduleService.delete(modulo.id).subscribe(() => this.buscarTodos());
  }

  private buscarTodos(): void {
    const paginacao = new Paginacao();
    paginacao.page = 0;
    paginacao.itensPerPage = 20;

    this.moduleService.getAll(paginacao).subscribe((response) => {
      this.modulos = response.itens;
      paginacao.totalItens = response.qtdItens;
    });
  }

}
