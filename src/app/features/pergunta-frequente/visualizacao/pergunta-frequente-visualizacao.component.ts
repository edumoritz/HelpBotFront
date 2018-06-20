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

@Component({
  selector: 'help-bot-regra-campo-visualizacao',
  templateUrl: './regra-campo-visualizacao.component.html'
})
export class PerguntaFrequenteVisualizacaoComponent {

  public fontAwesomePencil = faPencilAlt;
  public fontAwesomePlusCircle = faPlusCircle;
  public fontAwesomeTimeCircle = faTimesCircle;

  public regraCampos = [] as PerguntaFrequente[];

  public paginacao = new Paginacao();

  public dataSourceTable = new MatTableDataSource<PerguntaFrequente>([]);

  constructor(
    private regraCampoService: APerguntaFrequenteService,
    private router: Router,
    private modalService: ModalService,
    private paginationConfig: PaginationConfig
  ) {
    this.paginacao.itensPerPage = 2;
    this.buscarTodos();
   }

   public entityEvent(regraCampo?: PerguntaFrequente): void {
    if (!regraCampo) {
      regraCampo = new PerguntaFrequente();
    }

    this.modalService.addModal<IPerguntaFrequenteCadastroModal, void>(
      PerguntaFrequenteCadastroModalComponent,
      { regraCampo: regraCampo }
    ).subscribe(() => {
      this.buscarTodos();
    });
  }

  public onChangePage(page: number): void {
    this.paginacao.page = page - 1;
    this.buscarTodos();
  }

  public remover(regra: PerguntaFrequente): void {
    this.regraCampoService.delete(regra.id).subscribe(() => this.buscarTodos());
  }

  private buscarTodos(): void {
    this.regraCampoService.getAll(this.paginacao).subscribe((response) => {
      this.regraCampos = response.itens;
      this.dataSourceTable.data = response.itens;
      this.paginacao.totalItens = response.qtdItens;
    });
  }

}