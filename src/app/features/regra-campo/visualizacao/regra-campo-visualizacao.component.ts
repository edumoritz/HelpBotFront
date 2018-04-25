import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Paginacao } from '../../../models/paginacao/paginacao.model';
import { faPencilAlt, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ARegraCampoService } from '../../../services-abstract/regra-campo.service';
import { RegraCampo } from '../../../models/funcionalidade/regra-campo.model';



@Component({
  selector: 'help-bot-regra-campo-visualizacao',
  templateUrl: './regra-campo-visualizacao.component.html'
})
export class RegraCampoVisualizacaoComponent {

  public fontAwesomePencil = faPencilAlt;
  public fontAwesomePlusCircle = faPlusCircle;
  public fontAwesomeTimeCircle = faTimesCircle;

  public regraCampos = [] as RegraCampo[];

  constructor(
    private regraCampoService: ARegraCampoService,
    private router: Router
  ) {
    this.buscarTodos();
   }

   public editar(regraCampo: RegraCampo): void {
     this.router.navigate([`/app/regraCampo-cadastro/${regraCampo.id}`]);
   }

   public criar(): void {
    this.router.navigate([`/app/regraCampo-cadastro/null`]);
  }

  public remover(func: RegraCampo): void {
    this.regraCampoService.delete(func.id).subscribe(() => this.buscarTodos());
  }

  public buscarTodos(): void {
    const paginacao = new Paginacao();
    paginacao.page = 0;
    paginacao.itensPerPage = 20;

    this.regraCampoService.getAll(paginacao).subscribe((response) => {
      this.regraCampos = response.itens;
      paginacao.totalItens = response.qtdItens;
    });
  }

}
