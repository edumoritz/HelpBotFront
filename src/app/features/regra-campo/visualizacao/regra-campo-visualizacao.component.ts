import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Paginacao } from '../../../models/paginacao/paginacao.model';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ARegraCampoService } from '../../../services-abstract/regra-campo.service';
import { RegraCampo } from '../../../models/funcionalidade/regra-campo.model';
import { ModalService } from '../../../components/modal/modal.service';
import { IRegraCampoCadastroModal, RegraCampoCadastroModalComponent } from '../cadastro/regra-campo-cadastro-modal.component';
import { RegraCampoCadastroComponent } from '../cadastro/regra-campo-cadastro.component';
import { PaginationConfig } from 'ngx-bootstrap/pagination';
import { MatTableDataSource } from '@angular/material';

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
    private router: Router,
    private modalService: ModalService,
    private paginationConfig: PaginationConfig
  ) {
    this.paginacao.itensPerPage = 2;
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