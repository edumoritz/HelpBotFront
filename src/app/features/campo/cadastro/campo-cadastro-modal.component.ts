import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Modulo } from '../../../models/funcionalidade/modulo.model';
import { ModalSuperComponent } from '../../../components/modal/modal-super.component';
import { ModalService } from '../../../components/modal/modal.service';
import { AModuleService } from '../../../services-abstract/modulo.service';
import { Campo } from '../../../models/funcionalidade/campo.model';
import { ACampoService } from '../../../services-abstract/campo.service';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {FormControl} from '@angular/forms';

export interface ICampoCadastroModal {
  campo: Campo;
}
export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}

@Component({
  selector: 'help-bot-campo-cadastro-modal',
  templateUrl: './campo-cadastro-modal.component.html'
})
export class CampoCadastroModalComponent
extends ModalSuperComponent<ICampoCadastroModal, void>
implements ICampoCadastroModal {

  filteredStates: Observable<any[]>;

  public campo: Campo;

  constructor(
    public modalService: ModalService,
    private campoService: ACampoService,
    
  ) {
    super(modalService);
  }

  public cancelar() {
    this.modalService.fecharModal(this);
  }

  public salvar(): void {
    let acao: Observable<Campo>;

    if (this.campo.id) {
      acao = this.campoService.put(this.campo);
    } else {
      acao = this.campoService.post(this.campo);
    }

    acao.subscribe(() => this.modalService.fecharModal(this));
  }

}
