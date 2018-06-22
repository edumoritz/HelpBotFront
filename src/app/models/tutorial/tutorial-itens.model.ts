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
    if (!titulos) {
      titulos = [];
    }

    if (!descricoes) {
      descricoes = [];
    }

    if (!caminhos) {
      caminhos = [];
    }

    if (!imagens) {
      imagens = [];
    }
  }
}
