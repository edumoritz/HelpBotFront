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
import { ACampoService } from '../../services-abstract/campo.service';
import { Campo } from '../../models/funcionalidade/campo.model';
import { ARegraCampoService } from '../../services-abstract/regra-campo.service';
import { AFuncionalidadeService } from '../../services-abstract/funcionalidade.service';
import { RegraCampo } from '../../models/funcionalidade/regra-campo.model';
import { Funcionalidade } from '../../models/funcionalidade/funciondalidade.model';

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
  public campos = [] as Campo[];
  public regraCampos = [] as RegraCampo[];
  public funcionalidades = [] as Funcionalidade[];

  constructor(
    private moduleService: AModuleService,
    private campoService: ACampoService,
    private regraCampoService: ARegraCampoService,
    private funcionalidadeService: AFuncionalidadeService,
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
    this.campoService.getAll(paginacao).subscribe((response) => {
      this.campos = response.itens;
      paginacao.totalItens = response.qtdItens;
    });
    this.regraCampoService.getAll(paginacao).subscribe((response) => {
      this.regraCampos = response.itens;
      paginacao.totalItens = response.qtdItens;
    });
    this.funcionalidadeService.getAll(paginacao).subscribe((response) => {
      this.funcionalidades = response.itens;
      paginacao.totalItens = response.qtdItens;
    });
  }

}
