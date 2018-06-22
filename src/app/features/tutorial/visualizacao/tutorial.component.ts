import { forkJoin } from 'rxjs/observable/forkJoin';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ATutorialService } from '../../../services-abstract/tutorial.service';
import { Tutorial } from '../../../models/tutorial/tutorial.model';
import { TutorialItens } from '../../../models/tutorial/tutorial-itens.model';
import { TutorialItemDescricao } from '../../../models/tutorial/tutorial-item-descricao.model';
import { TutorialItemImagem } from '../../../models/tutorial/tutorial-item-imagem.model';

export const enum TipoExibicao {
  DESCRICAO,
  IMAGEM
}

export interface ITutorialItensMostrar {
  formaExibicao: TipoExibicao;
  objeto: TutorialItemDescricao | TutorialItemImagem;
}

@Component({
  selector: 'help-bot-tutorial',
  templateUrl: './tutorial.component.html'
})
export class TutorialComponent {

  public tutorial: Tutorial;
  public itens: ITutorialItensMostrar[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private tutorialService: ATutorialService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'] ? Number(params['id']) : null;

      if (id) {
        forkJoin(
          this.tutorialService.getOne(id),
          this.tutorialService.getItens(id)
        ).subscribe((res) => {
          this.tutorial = res[0];
          this.montarItens(res[1]);
        });
      }

    });
  }

  private montarItens(itens: TutorialItens): void {
    const itensToFormted = [
      ...(itens.descricoes.map<ITutorialItensMostrar>((item) => (
        { formaExibicao: TipoExibicao.DESCRICAO, objeto: item }
      ))),
      ...(itens.imagens.map<ITutorialItensMostrar>((item) => (
        { formaExibicao: TipoExibicao.IMAGEM, objeto: item }
      )))
    ];

    this.itens = itensToFormted.sort((a, b) => {
      if (a.objeto.ordem > b.objeto.ordem) {
        return 1;
      } else if (a.objeto.ordem < b.objeto.ordem) {
        return -1;
      }

      return 0;
    });
  }

}
