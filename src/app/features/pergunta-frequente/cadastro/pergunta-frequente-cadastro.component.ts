import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faBan, faSave } from '@fortawesome/free-solid-svg-icons';
import { Modulo } from '../../../models/funcionalidade/modulo.model';
import { ARegraCampoService } from '../../../services-abstract/regra-campo.service';
import { RegraCampo } from '../../../models/funcionalidade/regra-campo.model';
import { APerguntaFrequenteService } from '../../../services-abstract/pergunta-frequente.service';
import { PerguntaFrequente } from '../../../models/perguntas-frequentes/pergunta-frequente.model';

@Component({
  selector: 'help-bot-regra-campo-cadastro',
  templateUrl: './regra-campo-cadastro.component.html'
})
export class PerguntaFrequenteCadastroComponent {

  public fontAwesomeBan = faBan;
  public fontAwesomeSave = faSave;

  public perguntaFrequente = new PerguntaFrequente();

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
    private PerguntaFrequenteService: APerguntaFrequenteService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.params.subscribe((param) => {
      const id = param['id'];

      if (id !== 'null') {
        this.PerguntaFrequenteService.getOne(Number(id)).subscribe((modulo) => {
          this.perguntaFrequente.id = modulo.id;
        });
      }
    });
   }

   public salvar(): void {
    if (this.perguntaFrequente.id) {
      this.PerguntaFrequenteService.put(this.perguntaFrequente).subscribe((modulo) => {
        window.history.back();
      });
    } else {
      this.PerguntaFrequenteService.post(this.perguntaFrequente).subscribe((modulo) => {
        window.history.back();
      });
    }
  }

  public cancelar(): void {
    window.history.back();
  }

}
