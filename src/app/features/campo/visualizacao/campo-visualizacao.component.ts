import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';

import { faPencilAlt, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { ACampoService } from '../../../services-abstract/campo.service';
import { Paginacao } from '../../../models/paginacao/paginacao.model';
import { Campo } from '../../../models/funcionalidade/campo.model';
import { ModalService } from '../../../components/modal/modal.service';
import { ModuloCadastroModalComponent } from '../../modulo/cadastro/modulo-cadastro-modal.component';
import { ICampoCadastroModal, CampoCadastroModalComponent } from '../cadastro/campo-cadastro-modal.component';

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

  public dataSourceTable = new MatTableDataSource<Modulo>([]);

  constructor(

    private campoService: ACampoService,
    private router: Router,
    private modalService: ModalService

  ) {

    this.buscarTodos();

  }
  public editar(campo: Campo): void {
    this.router.navigate([`/app/campo-cadastro/${campo.id}`]);
  }

  public criar(campo?: Campo): void {
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
