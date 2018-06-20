import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ModalSuperComponent } from '../../../components/modal/modal-super.component';
import { ModalService } from '../../../components/modal/modal.service';
import { AModuleService } from '../../../services-abstract/modulo.service';
import { RegraCampo } from '../../../models/funcionalidade/regra-campo.model';
import { PerguntaFrequente } from '../../../models/perguntas-frequentes/pergunta-frequente.model';


export interface IPerguntaFrequenteCadastroModal {
  regraCampo: PerguntaFrequente;
}

export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}

@Component({
  selector: 'help-bot-regra-campo-cadastro-modal',
  templateUrl: './regra-campo-cadastro-modal.component.html'
})
export class PerguntaFrequenteCadastroModalComponent
extends ModalSuperComponent<IPerguntaFrequenteCadastroModal, void>
implements IPerguntaFrequenteCadastroModal {
  
  filteredStates: Observable<any[]>;

  public perguntaFrequente: PerguntaFrequente;

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
    let acao: Observable<PerguntaFrequente>;

    if (this.perguntaFrequente.id) {
      acao = this.moduleService.put(this.perguntaFrequente);
    } else {
      acao = this.moduleService.post(this.perguntaFrequente);
    }

    acao.subscribe(() => this.modalService.fecharModal(this));
  }

}
