import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { faPencilAlt, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { Paginacao } from '../../../models/paginacao/paginacao.model';
import { Tutorial } from '../../../models/tutorial/tutorial.model';
import { ATutorialService } from '../../../services-abstract/tutorial.service';

@Component({
  selector: 'help-bot-tutorial-visualizacao',
  templateUrl: './tutorial-visualizacao.component.html'
})
export class TutorialVisualizacaoComponent {

  public fontAwesomePencil = faPencilAlt;
  public fontAwesomePlusCircle = faPlusCircle;
  public fontAwesomeTimeCircle = faTimesCircle;

  public tutorial = [] as Tutorial[];

  public paginacao = new Paginacao();

  public dataSourceTable = new MatTableDataSource<Tutorial>([]);

  constructor(
    private tutorialService: ATutorialService,
    private router: Router,
  ) {
    this.paginacao.itensPerPage = 2;
    this.buscarTodos();
   }

   public entityEvent(tutorial?: Tutorial): void {
     if (tutorial && tutorial.id) {
       this.router.navigate(['/home/tutorial-cadastro', tutorial.id]);
     } else {
      this.router.navigate(['/home/tutorial-cadastro', 0]);
     }
  }

  public onChangePage(page: number): void {
    this.paginacao.page = page - 1;
    this.buscarTodos();
  }

  public remover(tutorial: Tutorial): void {
    this.tutorialService.delete(tutorial.id).subscribe(() => this.buscarTodos());
  }

  private buscarTodos(): void {
    this.tutorialService.getAll(this.paginacao).subscribe((response) => {
      this.tutorial = response.itens;
      this.dataSourceTable.data = response.itens;
      this.paginacao.totalItens = response.qtdItens;
    });
  }

}
