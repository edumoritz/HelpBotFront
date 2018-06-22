import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ATutorialService } from '../../../services-abstract/tutorial.service';
import { Tutorial } from '../../../models/tutorial/tutorial.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TutorialItens } from '../../../models/tutorial/tutorial-itens.model';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { TutorialItemTitulo } from '../../../models/tutorial/tutorial-item-titulo.model';
import { TutorialItemDescricao } from '../../../models/tutorial/tutorial-item-descricao.model';
import { TutorialItemBreadcrumb } from '../../../models/tutorial/tutorial-item-breadcrumb.model';
import { TutorialItemImagem } from '../../../models/tutorial/tutorial-item-imagem.model';
import { faArrowUp, faMinus, faArrowDown, faTimes } from '@fortawesome/free-solid-svg-icons';

export const enum TipoExibicao {
  TITULO,
  DESCRICAO,
  CAMINHO,
  IMAGEM
}

export interface ITutorialItensMostrar {
  formaExibicao: TipoExibicao;
  objeto: TutorialItemTitulo | TutorialItemDescricao | TutorialItemBreadcrumb | TutorialItemImagem;
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
        }
      );
    }
  }

  public addTitulo(): void {
    const titulo = new TutorialItemTitulo();

    titulo.tamanho = 'GRANDE';
    titulo.titulo = 'Título';
    titulo.tutorial = this.tutorial;

    const novoItem: ITutorialItensMostrar = {
      formaExibicao: TipoExibicao.TITULO,
      objeto: titulo
    };

    this.itens.push(novoItem);
  }

  public changeTamanhoTitulo(item: TutorialItemTitulo): void {
    if (item.tamanho === 'GRANDE') {
      item.tamanho = 'MEDIO';
    } else if (item.tamanho === 'MEDIO') {
      item.tamanho = 'PEQUENO';
    } else {
      item.tamanho = 'GRANDE';
    }
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

  public removerItem(item: ITutorialItensMostrar): void {
    const index = this.itens.indexOf(item);

    if (index > -1) {
      this.itens.splice(index, 1);
    }
  }

  private montarItens(itens: TutorialItens): void {
    const itensToFormted = [
      ...(itens.titulos.map<ITutorialItensMostrar>((item) => (
        { formaExibicao: TipoExibicao.TITULO, objeto: item }
      ))),
      ...(itens.descricoes.map<ITutorialItensMostrar>((item) => (
        { formaExibicao: TipoExibicao.DESCRICAO, objeto: item }
      ))),
      ...(itens.caminhos.map<ITutorialItensMostrar>((item) => (
        { formaExibicao: TipoExibicao.CAMINHO, objeto: item }
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
