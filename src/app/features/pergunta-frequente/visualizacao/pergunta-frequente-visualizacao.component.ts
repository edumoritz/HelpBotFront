import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Paginacao } from '../../../models/paginacao/paginacao.model';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from '../../../components/modal/modal.service';
import { PaginationConfig } from 'ngx-bootstrap/pagination';
import { MatTableDataSource } from '@angular/material';
import { PerguntaFrequente } from '../../../models/perguntas-frequentes/pergunta-frequente.model';
import { APerguntaFrequenteService } from '../../../services-abstract/pergunta-frequente.service';
import { PerguntaFrequenteCadastroModalComponent } from '../cadastro/pergunta-frequente-cadastro-modal.component';

export interface IPerguntaFrequenteCadastroModal {
  perguntaFrequente: PerguntaFrequente;
}
@Component({
  selector: 'help-bot-pergunta-frequente-visualizacao',
  templateUrl: './pergunta-frequente-visualizacao.component.html'
})
export class PerguntaFrequenteVisualizacaoComponent {

  public fontAwesomePencil = faPencilAlt;
  public fontAwesomePlusCircle = faPlusCircle;
  public fontAwesomeTimeCircle = faTimesCircle;

  public perguntaFrequente = [] as PerguntaFrequente[];

  public paginacao = new Paginacao();

  public dataSourceTable = new MatTableDataSource<PerguntaFrequente>([]);

  constructor(
    private perguntaFrequenteService: APerguntaFrequenteService,
    private modalService: ModalService
  ) {
    this.buscarTodos();
   }

   public entityEvent(perguntaFrequente?: PerguntaFrequente): void {
    if (!perguntaFrequente) {
      perguntaFrequente = new PerguntaFrequente();
    }

    this.modalService.addModal<IPerguntaFrequenteCadastroModal, void>(
      PerguntaFrequenteCadastroModalComponent,
      { perguntaFrequente: perguntaFrequente }
    ).subscribe(() => {
      this.buscarTodos();
    });
  }

  public onChangePage(page: number): void {
    this.paginacao.page = page - 1;
    this.buscarTodos();
  }

  public remover(pergunta: PerguntaFrequente): void {
    this.perguntaFrequenteService.delete(pergunta.id).subscribe(() => this.buscarTodos());
  }

  private buscarTodos(): void {
    this.perguntaFrequenteService.getAll(this.paginacao).subscribe((response) => {
      this.perguntaFrequente = response.itens;
      this.dataSourceTable.data = response.itens;
      this.paginacao.totalItens = response.qtdItens;
    });
  }

}
