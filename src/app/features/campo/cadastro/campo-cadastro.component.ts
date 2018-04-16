import { Component } from '@angular/core';
import { ACampoService } from '../../../services-abstract/campo.service';
import { Campo } from '../../../models/funcionalidade/campo.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'help-bot-campo-cadastro',
  templateUrl: './campo-cadastro.component.html'
})
export class CampoCadastroComponent {
  public campo = new Campo();
  constructor(
    private campoService: ACampoService,
    private activatedRoute: ActivatedRoute
  ) {

    this.activatedRoute.params.subscribe((param) => {
      const id = param['id'];

      if (id !== 'null') {
        this.campoService.getOne(Number(id)).subscribe((campo) => {
          this.campo.id = campo.id;
          this.campo.especificacao = campo.especificacao;
          this.campo.nome = campo.nome;
        });
      }
    });
  }

  public salvar(): void {
    if (this.campo.id) {
      this.campoService.put(this.campo).subscribe((campo) => {
        window.history.back();
      });
    } else {
      this.campoService.post(this.campo).subscribe((campo) => {
        window.history.back();
      });
    }
  }



  public cancelar(): void {
    window.history.back();
  }
}
