import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ModalSuperComponent } from '../../../components/modal/modal-super.component';
import { ModalService } from '../../../components/modal/modal.service';
import { AModuleService } from '../../../services-abstract/modulo.service';
import { RegraCampo } from '../../../models/funcionalidade/regra-campo.model';


export interface IRegraCampoCadastroModal {
  regraCampo: RegraCampo;
}

export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}

@Component({
  selector: 'help-bot-regra-campo-cadastro-modal',
  templateUrl: './regra-campo-cadastro-modal.component.html'
})
export class RegraCampoCadastroModalComponent
extends ModalSuperComponent<IRegraCampoCadastroModal, void>
implements IRegraCampoCadastroModal {
  
  filteredStates: Observable<any[]>;

  public regraCampo: RegraCampo;

  constructor(
    public modalService: ModalService,
    private moduleService: AModuleService
  ) {
    super(modalService);
  }

  public cancelar() {
    this.modalService.fecharModal(this);
  }

  public salvar(): void {
    let acao: Observable<RegraCampo>;

    if (this.regraCampo.id) {
      acao = this.moduleService.put(this.regraCampo);
    } else {
      acao = this.moduleService.post(this.regraCampo);
    }

    acao.subscribe(() => this.modalService.fecharModal(this));
  }

}
