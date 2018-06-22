import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { faPencilAlt, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { PaginationConfig } from 'ngx-bootstrap/pagination';

import { ModalService } from '../../../components/modal/modal.service';
import { Modulo } from '../../../models/funcionalidade/modulo.model';
import { Paginacao } from '../../../models/paginacao/paginacao.model';
import { AModuleService } from '../../../services-abstract/modulo.service';
import { IModuloCadastroModal, ModuloCadastroModalComponent } from '../cadastro/modulo-cadastro-modal.component';

@Component({
  selector: 'help-bot-modulo-visualizacao',
  templateUrl: './modulo-visualizacao.component.html'
})
export class ModuloVisualizacaoComponent {

  public fontAwesomePencil = faPencilAlt;
  public fontAwesomePlusCircle = faPlusCircle;
  public fontAwesomeTimeCircle = faTimesCircle;

  public modulos = [] as Modulo[];

  public paginacao = new Paginacao();

  public dataSourceTable = new MatTableDataSource<Modulo>([]);

  constructor(
    private moduleService: AModuleService,
    private modalService: ModalService,
    private paginationConfig: PaginationConfig
  ) {
    this.buscarTodos();
    console.log(this.paginationConfig);
  }

  public entityEvent(modulo?: Modulo): void {
    if (!modulo) {
      modulo = new Modulo();
    }

    this.modalService.addModal<IModuloCadastroModal, void>(
      ModuloCadastroModalComponent,
      { modulo: modulo }
    ).subscribe(() => {
      this.buscarTodos();
    });
  }

  public remover(modulo: Modulo): void {
    this.moduleService.delete(modulo.id).subscribe(() => this.buscarTodos());
  }

  public onChangePage(page: number): void {
    this.paginacao.page = page - 1;
    this.buscarTodos();
  }

  private buscarTodos(): void {
    this.moduleService.getAll(this.paginacao).subscribe((response) => {
      this.modulos = response.itens;
      this.dataSourceTable.data = response.itens;
      this.paginacao.totalItens = response.qtdItens;
    });
  }

}
