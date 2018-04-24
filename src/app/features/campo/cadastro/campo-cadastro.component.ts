import { Component } from '@angular/core';
import { ACampoService } from '../../../services-abstract/campo.service';
import { Campo } from '../../../models/funcionalidade/campo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { faSave, faBan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'help-bot-campo-cadastro',
  templateUrl: './campo-cadastro.component.html'
})
export class CampoCadastroComponent {

  public fontAwesomeBan = faBan;
  public fontAwesomeSave = faSave;

  public campo = new Campo();

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
  ] as any[];
  
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
