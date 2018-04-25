import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { DemoModule } from '../demo.module';
import { Modulo } from '../../models/funcionalidade/modulo.model';
import { ModalService } from '../../components/modal/modal.service';
import { AModuleService } from '../../services-abstract/modulo.service';
import { ModuloCadastroModalComponent } from '../../features/modulo/cadastro/modulo-cadastro-modal.component';
import { Paginacao } from '../../models/paginacao/paginacao.model';

@Component({
  selector: 'help-bot-demo-visualizacao',
  templateUrl: './demo-visualizacao.component.html',
  styleUrls: ['./demo-visualizacao.component.scss']
})
export class DemoVisualizacaoComponent {
  public fontAwesomePencil = faPencilAlt;
  public fontAwesomePlusCircle = faPlusCircle;
  public fontAwesomeTimeCircle = faTimesCircle;

  public modulos = [] as Modulo[];

  constructor(
    private moduleService: AModuleService,
    private router: Router,
    private modalService: ModalService
  ) {
    this.buscarTodos();
  }

  private buscarTodos(): void {
    const paginacao = new Paginacao();
    paginacao.page = 0;
    paginacao.itensPerPage = 20;

    this.moduleService.getAll(paginacao).subscribe((response) => {
      this.modulos = response.itens;
      paginacao.totalItens = response.qtdItens;
    });
  }

}
