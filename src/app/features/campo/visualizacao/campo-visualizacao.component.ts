import { Component } from '@angular/core';
import { ACampoService } from '../../../services-abstract/campo.service';
import { Router } from '@angular/router';
import { Paginacao } from '../../../models/paginacao/paginacao.model';
import { Campo } from '../../../models/funcionalidade/campo.model';
import { faPencilAlt, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'help-bot-campo-visualizacao',
  templateUrl: './campo-visualizacao.component.html'
})
export class CampoVisualizacaoComponent {

  public fontAwesomePencil = faPencilAlt;
  public fontAwesomePlusCircle = faPlusCircle;
  public fontAwesomeTimeCircle = faTimesCircle;

  public campos = [] as Campo[];

  constructor(
  
    private campoService: ACampoService,
    private router : Router

    ) { 

      this.buscarTodos();  
      
    }
    public editar(campo: Campo): void {
      this.router.navigate([`/app/campo-cadastro/${campo.id}`]);
    }
  
    public criar(): void {
      this.router.navigate([`/app/campo-cadastro/null`]);
    }

    public remover(campo: Campo): void {
      this.campoService.delete(campo.id).subscribe(() => this.buscarTodos());
    }

    public buscarTodos(): void {
      const paginacao = new Paginacao();
      paginacao.page = 0;
      paginacao.itensPerPage = 20;
      
      
      this.campoService.getAll(paginacao).subscribe((response) => {
        this.campos = response.itens;
        paginacao.totalItens = response.qtdItens;
      });
    }
}

