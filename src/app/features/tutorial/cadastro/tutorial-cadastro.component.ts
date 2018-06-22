import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faArrowDown, faArrowUp, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { forkJoin } from 'rxjs/observable/forkJoin';

import { TutorialItemDescricao } from '../../../models/tutorial/tutorial-item-descricao.model';
import { TutorialItemImagem } from '../../../models/tutorial/tutorial-item-imagem.model';
import { TutorialItens } from '../../../models/tutorial/tutorial-itens.model';
import { Tutorial } from '../../../models/tutorial/tutorial.model';
import { ATutorialService } from '../../../services-abstract/tutorial.service';

export const enum TipoExibicao {
  DESCRICAO,
  IMAGEM
}

export interface ITutorialItensMostrar {
  formaExibicao: TipoExibicao;
  objeto: TutorialItemDescricao | TutorialItemImagem;
}

@Component({
  selector: 'help-bot-tutorial-cadastro',
  templateUrl: './tutorial-cadastro.component.html',
  styleUrls: ['./tutorial-cadastro.component.scss']
})
export class TutorialCadastroComponent {

  public arrowUp = faArrowUp;
  public minus = faMinus;
  public arrowDown = faArrowDown;
  public times = faTimes;

  public tutorial = new Tutorial();
  public itens: ITutorialItensMostrar[] = [];

  public tutorialNome: FormControl;

  public quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction
      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [
        { color: [] },
        { background: [] }
      ], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ['clean'] // remove formatting button
      // [] // link and image, video
    ]
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private tutorialService: ATutorialService,
    private formBuilder: FormBuilder
  ) {

    this.tutorialNome = this.formBuilder.control(null, Validators.required);

    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'] ? Number(params['id']) : null;

      if (id) {
        forkJoin(
          this.tutorialService.getOne(id),
          this.tutorialService.getItens(id)
        ).subscribe((res) => {
            this.tutorial = res[0];
            this.montarItens(res[1]);
          }
        );
      }
    });
  }

  public addTutorial(): void {
    if (this.tutorialNome.valid) {
      this.tutorial.nome = this.tutorialNome.value;

      this.tutorialService.post(this.tutorial)
        .subscribe((tutorial) => {
          this.tutorial = tutorial;
          this.addDescricao();
        }
      );
    }
  }

  public salvarTutorial(): void {
    const tutorialItem = new TutorialItens();

    let ordem = 0;
    for (const item of this.itens) {
      item.objeto.ordem = ordem;

      if (item.formaExibicao === TipoExibicao.DESCRICAO) {
        tutorialItem.descricoes.push(item.objeto);
      } else if (item.formaExibicao === TipoExibicao.IMAGEM) {
        tutorialItem.imagens.push(item.objeto);
      }

      ordem++;
    }

    forkJoin(
      this.tutorialService.postItens(tutorialItem),
      this.tutorialService.put(this.tutorial)
    ).subscribe((res) => {
      this.montarItens(res[0]);
      this.tutorial = res[1];

      window.history.back();
    });
  }

  public addDescricao(): void {
    const titulo = new TutorialItemDescricao();

    titulo.descricao = '';
    titulo.tutorial = this.tutorial;

    const novoItem: ITutorialItensMostrar = {
      formaExibicao: TipoExibicao.DESCRICAO,
      objeto: titulo
    };

    this.itens.push(novoItem);
  }

  public addImage(): void {
    // TODO implementar.
  }

  public removerItem(item: ITutorialItensMostrar): void {
    const index = this.itens.indexOf(item);

    if (index > -1) {
      this.itens.splice(index, 1);
    }
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
