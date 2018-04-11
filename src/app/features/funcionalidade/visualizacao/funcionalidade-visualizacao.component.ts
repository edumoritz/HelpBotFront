import { Component } from '@angular/core';
import { Funcionalidade } from '../../../models/funcionalidade/funciondalidade.model';
import { AFuncionalidadeService } from '../../../services-abstract/funcionalidade.service';
import { Router } from '@angular/router';
import { Paginacao } from '../../../models/paginacao/paginacao.model';
import { faPencilAlt, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'help-bot-funcionalidade-visualizacao',
  templateUrl: './funcionalidade-visualizacao.component.html'
})
export class FuncionalidadeVisualizacaoComponent {

  public fontAwesomePencil = faPencilAlt;
  public fontAwesomePlusCircle = faPlusCircle;
  public fontAwesomeTimeCircle = faTimesCircle;

  public funcionalidades = [] as Funcionalidade[];

  constructor(
    private funcionalidadeService: AFuncionalidadeService,
    private router: Router
  ) {
    this.buscarTodos();    
   }

   public editar(funcionalidade: Funcionalidade): void {
     this.router.navigate([`/app/funcionalidade-cadastro/${funcionalidade.id}`]);
   }

   public criar(): void {
    this.router.navigate([`/app/funcionalidade-cadastro/null`]);
  }
  
  public buscarTodos(): void {
    const paginacao = new Paginacao();
    paginacao.page = 0;
    paginacao.itensPerPage = 20;

    this.funcionalidadeService.getAll(paginacao).subscribe((response) => {
      this.funcionalidades = response.itens;
      paginacao.totalItens = response.qtdItens;
    });
  }

}
