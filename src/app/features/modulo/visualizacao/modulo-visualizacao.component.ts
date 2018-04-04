import { Paginacao } from './../../../models/paginacao/paginacao.model';
import { Router } from '@angular/router';

import { Component } from '@angular/core';

import { Modulo } from './../../../models/funcionalidade/modulo.model';
import { AModuleService } from '../../../services-abstract/modulo.service';

@Component({
  selector: 'help-bot-modulo-visualizacao',
  templateUrl: './modulo-visualizacao.component.html'
})
export class ModuloVisualizacaoComponent {

  public modulos = [] as Modulo[];

  constructor(
    private moduleService: AModuleService,
    private router: Router
  ) {
    const paginacao = new Paginacao();
    paginacao.page = 0;
    paginacao.itensPerPage = 20;

    this.moduleService.getAll(paginacao).subscribe((response) => {
      this.modulos = response.itens;
      paginacao.totalItens = response.qtdItens;
    });
  }

  public editar(modulo: Modulo): void {
    this.router.navigate([`/app/modulo-cadastro/${modulo.id}`]);
  }

  public criar(): void {
    this.router.navigate([`/app/modulo-cadastro/null`]);
  }

}
