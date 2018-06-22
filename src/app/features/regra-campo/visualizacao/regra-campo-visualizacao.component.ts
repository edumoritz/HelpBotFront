import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { faPencilAlt, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { ModalService } from '../../../components/modal/modal.service';
import { RegraCampo } from '../../../models/funcionalidade/regra-campo.model';
import { Paginacao } from '../../../models/paginacao/paginacao.model';
import { ARegraCampoService } from '../../../services-abstract/regra-campo.service';
import {
  IRegraCampoCadastroModal,
  RegraCampoCadastroModalComponent,
} from '../cadastro/regra-campo-cadastro-modal.component';

@Component({
  selector: 'help-bot-regra-campo-visualizacao',
  templateUrl: './regra-campo-visualizacao.component.html'
})
export class RegraCampoVisualizacaoComponent {

  public fontAwesomePencil = faPencilAlt;
  public fontAwesomePlusCircle = faPlusCircle;
  public fontAwesomeTimeCircle = faTimesCircle;

  public regraCampos = [] as RegraCampo[];

  public paginacao = new Paginacao();

  public dataSourceTable = new MatTableDataSource<RegraCampo>([]);

  constructor(
    private regraCampoService: ARegraCampoService,
    private modalService: ModalService
  ) {
    this.buscarTodos();
   }

   public entityEvent(regraCampo?: RegraCampo): void {
    if (!regraCampo) {
      regraCampo = new RegraCampo();
    }

    this.modalService.addModal<IRegraCampoCadastroModal, void>(
      RegraCampoCadastroModalComponent,
      { regraCampo: regraCampo }
    ).subscribe(() => {
      this.buscarTodos();
    });
  }

  public onChangePage(page: number): void {
    this.paginacao.page = page - 1;
    this.buscarTodos();
  }

  public remover(regra: RegraCampo): void {
    this.regraCampoService.delete(regra.id).subscribe(() => this.buscarTodos());
  }

  private buscarTodos(): void {
    this.regraCampoService.getAll(this.paginacao).subscribe((response) => {
      this.regraCampos = response.itens;
      this.dataSourceTable.data = response.itens;
      this.paginacao.totalItens = response.qtdItens;
    });
  }

}
