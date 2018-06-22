import { TutorialItemImagem } from './tutorial-item-imagem.model';
import { TutorialItemBreadcrumb } from './tutorial-item-breadcrumb.model';
import { TutorialItemTitulo } from './tutorial-item-titulo.model';
import { TutorialItemDescricao } from './tutorial-item-descricao.model';

export class TutorialItens {
  constructor(
    public titulos?: TutorialItemTitulo[],
    public descricoes?: TutorialItemDescricao[],
    public caminhos?: TutorialItemBreadcrumb[],
    public imagens?: TutorialItemImagem[]
  ) {
    if (!this.titulos) {
      this.titulos = [];
    }

    if (!this.descricoes) {
      this.descricoes = [];
    }

    if (!this.caminhos) {
      this.caminhos = [];
    }

    if (!this.imagens) {
      this.imagens = [];
    }
  }
}
