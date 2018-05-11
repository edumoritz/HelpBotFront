import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faBan, faSave } from '@fortawesome/free-solid-svg-icons';
import { Modulo } from '../../../models/funcionalidade/modulo.model';
import { ARegraCampoService } from '../../../services-abstract/regra-campo.service';
import { RegraCampo } from '../../../models/funcionalidade/regra-campo.model';

@Component({
  selector: 'help-bot-regra-campo-cadastro',
  templateUrl: './regra-campo-cadastro.component.html'
})
export class RegraCampoCadastroComponent {

  public fontAwesomeBan = faBan;
  public fontAwesomeSave = faSave;

  public regraCampo = new RegraCampo();

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
    private regraCampoService: ARegraCampoService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.params.subscribe((param) => {
      const id = param['id'];

      if (id !== 'null') {
        this.regraCampoService.getOne(Number(id)).subscribe((modulo) => {
          this.regraCampo.id = modulo.id;
          this.regraCampo.nome = modulo.nome;
        });
      }
    });
   }

   public salvar(): void {
    if (this.regraCampo.id) {
      this.regraCampoService.put(this.regraCampo).subscribe((modulo) => {
        window.history.back();
      });
    } else {
      this.regraCampoService.post(this.regraCampo).subscribe((modulo) => {
        window.history.back();
      });
    }
  }

  public cancelar(): void {
    window.history.back();
  }

}
