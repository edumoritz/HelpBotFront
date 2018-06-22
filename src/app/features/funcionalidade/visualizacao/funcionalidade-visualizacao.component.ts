import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { faPencilAlt, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { ModalService } from '../../../components/modal/modal.service';
import { Funcionalidade } from '../../../models/funcionalidade/funciondalidade.model';
import { Paginacao } from '../../../models/paginacao/paginacao.model';
import { AFuncionalidadeService } from '../../../services-abstract/funcionalidade.service';
import {
  FuncionalidadeCadastroModalComponent,
  IFuncionalidadeCadastroModal,
} from '../cadastro/funcionalidade-cadastro-modal.component';


@Component({
  selector: 'help-bot-funcionalidade-visualizacao',
  templateUrl: './funcionalidade-visualizacao.component.html'
})
export class FuncionalidadeVisualizacaoComponent {

  public fontAwesomePencil = faPencilAlt;
  public fontAwesomePlusCircle = faPlusCircle;
  public fontAwesomeTimeCircle = faTimesCircle;

  public funcionalidades = [] as Funcionalidade[];

  public paginacao = new Paginacao();

  public dataSourceTable = new MatTableDataSource<Funcionalidade>([]);


  constructor(
    private funcionalidadeService: AFuncionalidadeService,
    private modalService: ModalService
  ) {
    this.buscarTodos();
   }

   public entityEvent(funcionalidade?: Funcionalidade): void {
    if (!funcionalidade) {
      funcionalidade = new Funcionalidade();
    }

    this.modalService.addModal<IFuncionalidadeCadastroModal, void>(
      FuncionalidadeCadastroModalComponent,
      { funcionalidade: funcionalidade }
    ).subscribe(() => {
      this.buscarTodos();
    });
  }

  public remover(func: Funcionalidade): void {
    this.funcionalidadeService.delete(func.id).subscribe(() => this.buscarTodos());
  }

  public onChangePage(page: number): void {
    this.paginacao.page = page - 1;
    this.buscarTodos();
  }

  private buscarTodos(): void {
    this.funcionalidadeService.getAll(this.paginacao).subscribe((response) => {
      this.funcionalidades = response.itens;
      this.dataSourceTable.data = response.itens;
      this.paginacao.totalItens = response.qtdItens;
    });
  }

}
