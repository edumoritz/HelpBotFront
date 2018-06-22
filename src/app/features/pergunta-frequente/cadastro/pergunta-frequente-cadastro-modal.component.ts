import { Component, OnInit } from '@angular/core';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs/Rx';

import { ModalSuperComponent } from '../../../components/modal/modal-super.component';
import { ModalService } from '../../../components/modal/modal.service';
import { PerguntaFrequenteKeyword } from '../../../models/perguntas-frequentes/pergunta-frequente-keyword.model';
import { PerguntaFrequente } from '../../../models/perguntas-frequentes/pergunta-frequente.model';
import { Tutorial } from '../../../models/tutorial/tutorial.model';
import { APerguntaFrequenteService } from '../../../services-abstract/pergunta-frequente.service';
import { ATutorialService } from '../../../services-abstract/tutorial.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';


export interface IPerguntaFrequenteCadastroModal {
  perguntaFrequente: PerguntaFrequente;
}

@Component({
  selector: 'help-bot-regra-campo-cadastro-modal',
  templateUrl: './pergunta-frequente-cadastro-modal.component.html',
  styleUrls: ['./pergunta-frequente-cadastro-modal.component.scss']
})
export class PerguntaFrequenteCadastroModalComponent
extends ModalSuperComponent<IPerguntaFrequenteCadastroModal, void>
implements IPerguntaFrequenteCadastroModal, OnInit {

  public plus = faPlus;
  public times = faTimes;

  public perguntaFrequente: PerguntaFrequente;

  public keyword = '';

  public tutoriais: Observable<Tutorial[]>;
  public tutorialQuery = '';

  constructor(
    public modalService: ModalService,
    private perguntaFrequenteService: APerguntaFrequenteService,
    private tutorialService: ATutorialService
  ) {
    super(modalService);
  }

  public ngOnInit(): void {
    if (this.perguntaFrequente.resposta) {
      this.tutorialQuery = this.perguntaFrequente.resposta.nome;
    }
    this.tutoriais = this.tutorialService.getBySearch(this.tutorialQuery).map((pageable) => pageable.itens);
  }

  public changeTutorialQuery(tutorialQuery: string): void {
    this.tutorialQuery = tutorialQuery;
    this.tutoriais = this.tutorialService.getBySearch(this.tutorialQuery).map((pageable) => pageable.itens);
  }

  public addKeyword(): void {
    if (this.keyword) {
      this.keyword = this.keyword.replace(' ', '');
      const perKeyword = new PerguntaFrequenteKeyword();
      perKeyword.descricao = this.keyword;
      if (!this.perguntaFrequente.keywords) {
        this.perguntaFrequente.keywords = [];
      }
      this.perguntaFrequente.keywords.push(perKeyword);
      this.keyword = '';
    }
  }

  public optionSelected(evento: MatAutocompleteSelectedEvent): void {
    const tutorial = evento.option.value;
    this.perguntaFrequente.resposta = tutorial;
  }

  public removeKeyword(item: PerguntaFrequenteKeyword): void {
    const index = this.perguntaFrequente.keywords.indexOf(item);

    if (index > -1) {
      this.perguntaFrequente.keywords.splice(index, 1);
    }
  }

  public displayTutorial(valor: string | Tutorial): string {
    if (!valor) {
      return '';
    }
    if (typeof valor === 'string') {
      return valor;
    }
    return valor.nome;
  }

  public cancelar(): void {
    this.modalService.fecharModal(this);
  }

  public salvar(): void {
    let acao: Observable<PerguntaFrequente>;

    if (this.perguntaFrequente.id) {
      acao = this.perguntaFrequenteService.put(this.perguntaFrequente);
    } else {
      acao = this.perguntaFrequenteService.post(this.perguntaFrequente);
    }

    acao.subscribe(() => this.modalService.fecharModal(this));
  }

  public onKeyUpKeyword(evento: KeyboardEvent): void {
    if (evento.keyCode === 32) {
      this.addKeyword();
    }
  }

  public isValid(): boolean {
    if (
      !this.perguntaFrequente.resposta ||
      !this.perguntaFrequente.pergunta ||
      !(this.perguntaFrequente.keywords &&
      this.perguntaFrequente.keywords.length)) {
      return false;
    }

    return true;
  }

}
