import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Paginacao } from '../../../models/paginacao/paginacao.model';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from '../../../components/modal/modal.service';
import { PaginationConfig } from 'ngx-bootstrap/pagination';
import { MatTableDataSource } from '@angular/material';
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
    private modalService: ModalService,
    private paginationConfig: PaginationConfig
  ) {
    this.paginacao.itensPerPage = 2;
    this.buscarTodos();
   }

   public entityEvent(tutorial?: Tutorial): void {
     if (tutorial.id) {
       this.router.navigate(['/home/tutorial-cadastro', tutorial.id]);
     } else {
      this.router.navigate(['/home/tutorial-cadastro']);
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
