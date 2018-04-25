import { Funcionalidade } from "../../../models/funcionalidade/funciondalidade.model";
import { Component } from "@angular/core";
import { ModalSuperComponent } from "../../../components/modal/modal-super.component";
import { FuncionalidadeService } from "../../../services/funcionalidade.service";
import { AFuncionalidadeService } from "../../../services-abstract/funcionalidade.service";
import { ModalService } from "../../../components/modal/modal.service";
import { Modulo } from "../../../models/funcionalidade/modulo.model";
import { Observable } from 'rxjs/Rx';

export interface IFuncionalidadeCadastroModal {
  funcionalidade: Funcionalidade;
}

@Component({
  selector: 'help-bot-funcionalidade-cadastro-modal',
  templateUrl: './funcionalidade-cadastro-modal.component.html'
})
export class FuncionalidadeCadastroModalComponent
extends ModalSuperComponent<IFuncionalidadeCadastroModal, void>
implements IFuncionalidadeCadastroModal {

  public funcionalidade: Funcionalidade;

  constructor(
    public modalService: ModalService,
    private funcionalidadeService: AFuncionalidadeService
  ) {
    super(modalService);
  }

  public cancelar() {
    this.modalService.fecharModal(this);
  }

  public salvar(): void {
    let acao: Observable<Modulo>;

    if(this.funcionalidade.id) {
      acao = this.funcionalidadeService.put(this.funcionalidade);
    } else {
      acao = this.funcionalidadeService.post(this.funcionalidade);
    }

    acao.subscribe(() => this.modalService.fecharModal(this));
  }

}