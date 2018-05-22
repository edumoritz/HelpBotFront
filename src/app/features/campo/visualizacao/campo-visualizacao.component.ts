import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';

import { faPencilAlt, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { ACampoService } from '../../../services-abstract/campo.service';
import { Paginacao } from '../../../models/paginacao/paginacao.model';
import { Campo } from '../../../models/funcionalidade/campo.model';
import { ModalService } from '../../../components/modal/modal.service';
import { ModuloCadastroModalComponent } from '../../modulo/cadastro/modulo-cadastro-modal.component';
import { ICampoCadastroModal, CampoCadastroModalComponent } from '../cadastro/campo-cadastro-modal.component';
import { MatTableDataSource } from '@angular/material';
import { PaginationConfig } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'help-bot-campo-visualizacao',
  templateUrl: './campo-visualizacao.component.html'
})
export class CampoVisualizacaoComponent {

  public fontAwesomePencil = faPencilAlt;
  public fontAwesomePlusCircle = faPlusCircle;
  public fontAwesomeTimeCircle = faTimesCircle;

  public campos = [] as Campo[];

  public paginacao = new Paginacao();

  public dataSourceTable = new MatTableDataSource<Campo>([]);

  constructor(

    private campoService: ACampoService,
    private router: Router,
    private modalService: ModalService,
    private paginationConfig: PaginationConfig

  ) {
    this.paginacao.itensPerPage = 2;
    this.buscarTodos();
  }

  public entityEvent(campo?: Campo): void {
    if (!campo) {
      campo = new Campo();
    }

    this.modalService.addModal<ICampoCadastroModal, void>(
      CampoCadastroModalComponent,
      { campo: campo }
    ).subscribe(() => {
      this.buscarTodos();
    });
  }

  public remover(campo: Campo): void {
    this.campoService.delete(campo.id).subscribe(() => this.buscarTodos());
  }

  public onChangePage(page: number): void {
    this.paginacao.page = page - 1;
    this.buscarTodos();
  }

  private buscarTodos(): void {
    this.campoService.getAll(this.paginacao).subscribe((response) => {
      this.campos = response.itens;
      this.dataSourceTable.data = response.itens;
      this.paginacao.totalItens = response.qtdItens;
    });
  }

}
