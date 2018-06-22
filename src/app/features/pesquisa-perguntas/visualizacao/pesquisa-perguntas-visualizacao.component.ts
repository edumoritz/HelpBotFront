import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';

import { PerguntaFrequente } from '../../../models/perguntas-frequentes/pergunta-frequente.model';
import { APerguntaFrequenteService } from '../../../services-abstract/pergunta-frequente.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'help-bot-pesquisa-perguntas-visualizacao',
  templateUrl: './pesquisa-perguntas-visualizacao.component.html',
  styleUrls: ['./pesquisa-perguntas-visualizacao.component.scss']
})
export class PesquisaPerguntaVisualizacaoComponent {

  public query = '';

  public perguntas: Observable<PerguntaFrequente[]>;

  public searchIcon = faSearch;

  constructor(
    private pesquisaPerguntaService: APerguntaFrequenteService,
    private router: Router
  ) {
  }

  public pesquisar(): void {
    this.perguntas = this.pesquisaPerguntaService.getBySearch(this.query)
      .map((pagina) => pagina.itens);
  }

  public irParaTutorial(pergunta: PerguntaFrequente): void {
    this.router.navigate(['/home/tutorial', pergunta.resposta.id]);
  }

}
