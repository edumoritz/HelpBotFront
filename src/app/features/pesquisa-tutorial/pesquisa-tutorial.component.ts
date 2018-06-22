import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Tutorial } from '../../models/tutorial/tutorial.model';
import { ATutorialService } from '../../services-abstract/tutorial.service';
import { Router } from '@angular/router';

@Component({
  selector: 'help-bot-pesquisa-tutorial',
  templateUrl: './pesquisa-tutorial.component.html',
  styleUrls: ['./pesquisa-tutorial.component.scss']
})
export class PesquisaTutorialComponent {

  public searchIcon = faSearch;

  public query = '';

  public tutoriais: Observable<Tutorial[]>;

  constructor(
    private tutorialServicde: ATutorialService,
    private router: Router
  ) {
    this.tutoriais = this.tutorialServicde.getBySearch(this.query)
      .map((pagina) => pagina.itens);
  }

  public pesquisar(): void {
    this.tutoriais = this.tutorialServicde.getBySearch(this.query)
      .map((pagina) => pagina.itens);
  }

  public irParaTutorial(tutorial: Tutorial): void {
    this.router.navigate(['/home/tutorial', tutorial.id]);
  }

}
