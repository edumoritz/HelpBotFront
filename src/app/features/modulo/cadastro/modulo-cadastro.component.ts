import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';

import { Modulo } from './../../../models/funcionalidade/modulo.model';
import { AModuleService } from '../../../services-abstract/modulo.service';
import { Opcoes } from '../../../components/opcoes/opcoes.model';

@Component({
  selector: 'help-bot-modulo-cadastro',
  templateUrl: './modulo-cadastro.component.html'
})
export class ModuloCadastroComponent {

  public fontAwesomeBan = faBan;
  public fontAwesomeSave = faSave;

  public modulo = new Modulo();

  public opcoes = [
    {
      icone: faBan,
      acao: () => this.cancelar(),
      cor: 'danger',
      titulo: 'Cancelar'
    },
    {
      icone: faSave,
      acao: () => this.salvar(),
      cor: 'primary',
      titulo: 'Salvar'
    }
  ] as Opcoes[];

  constructor(
    private moduleService: AModuleService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((param) => {
      const id = param['id'];

      if (id !== 'null') {
        this.moduleService.getOne(Number(id)).subscribe((modulo) => {
          this.modulo.id = modulo.id;
          this.modulo.especificacao = modulo.especificacao;
          this.modulo.nome = modulo.nome;
        });
      }
    });
  }

  public salvar(): void {
    if (this.modulo.id) {
      this.moduleService.put(this.modulo).subscribe((modulo) => {
        window.history.back();
      });
    } else {
      this.moduleService.post(this.modulo).subscribe((modulo) => {
        window.history.back();
      });
    }
  }

  public cancelar(): void {
    window.history.back();
  }

}
