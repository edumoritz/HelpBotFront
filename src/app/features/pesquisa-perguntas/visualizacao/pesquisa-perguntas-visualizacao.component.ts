import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Paginacao } from '../../../models/paginacao/paginacao.model';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ARegraCampoService } from '../../../services-abstract/regra-campo.service';
import { RegraCampo } from '../../../models/funcionalidade/regra-campo.model';
import { ModalService } from '../../../components/modal/modal.service';
import { PaginationConfig } from 'ngx-bootstrap/pagination';
import { MatTableDataSource } from '@angular/material';
import { PerguntaFrequente } from '../../../models/perguntas-frequentes/pergunta-frequente.model';
import { APerguntaFrequenteService } from '../../../services-abstract/pergunta-frequente.service';

@Component({
  selector: 'help-bot-pesquisa-perguntas-visualizacao',
  templateUrl: './pesquisa-perguntas-visualizacao.component.html'
})
export class PesquisaPerguntaVisualizacaoComponent {

  public fontAwesomePencil = faPencilAlt;
  public fontAwesomePlusCircle = faPlusCircle;
  public fontAwesomeTimeCircle = faTimesCircle;

  public pesquisaPerguntas = [] as PerguntaFrequente[];

  constructor(
    private pesquisaPerguntaService: APerguntaFrequenteService,
    private router: Router,
    private modalService: ModalService,
  ) {
    this.buscarTodos();
   }

   public entityEvent(perguntaFrequente?: PerguntaFrequente): void {
    if (!perguntaFrequente) {
      perguntaFrequente = new PerguntaFrequente();
    }
  }

  public remover(perguntaFrequente: PerguntaFrequente): void {
    this.pesquisaPerguntaService.delete(perguntaFrequente.id).subscribe(() => this.buscarTodos());
  }

  private buscarTodos(): void {
    // this.pesquisaPerguntaService.getAll().subscribe((response) => {
    //   this.perguntaFrequente = response.itens;
    // });
  }
}
