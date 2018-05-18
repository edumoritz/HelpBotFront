import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Paginacao } from '../../../models/paginacao/paginacao.model';
import { faPencilAlt, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
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
  /*
   public editar(regraCampo: RegraCampo): void {
     this.router.navigate([`/app/regraCampo-cadastro/${regraCampo.id}`]);
   }

   public criar(): void {
    this.router.navigate([`/app/regraCampo-cadastro/null`]);
   }*/

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
/*
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
*/