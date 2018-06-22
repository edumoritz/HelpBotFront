import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Modulo } from '../../../models/funcionalidade/modulo.model';
import { ModalSuperComponent } from '../../../components/modal/modal-super.component';
import { ModalService } from '../../../components/modal/modal.service';
import { AModuleService } from '../../../services-abstract/modulo.service';

export interface IModuloCadastroModal {
  modulo: Modulo;
}

@Component({
  selector: 'help-bot-modulo-cadastro-modal',
  templateUrl: './modulo-cadastro-modal.component.html'
})
export class ModuloCadastroModalComponent
extends ModalSuperComponent<IModuloCadastroModal, void>
implements IModuloCadastroModal {

  public modulo: Modulo;

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
    let acao: Observable<Modulo>;

    if (this.modulo.id) {
      acao = this.moduleService.put(this.modulo);
    } else {
      acao = this.moduleService.post(this.modulo);
    }

    acao.subscribe(() => this.modalService.fecharModal(this));
  }

}
