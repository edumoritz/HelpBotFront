import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Modulo } from './../../../models/funcionalidade/modulo.model';
import { AModuleService } from '../../../services-abstract/modulo.service';

@Component({
  selector: 'help-bot-modulo-cadastro',
  templateUrl: './modulo-cadastro.component.html'
})
export class ModuloCadastroComponent {

  public modulo = new Modulo();

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
