import { faHireAHelper, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { Component } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

export interface IItemPaiMenu {
  nome: string;
  filhos: IItemFilhoMenu[];
  aberto: boolean;
  icon: IconDefinition;
}

export interface IItemFilhoMenu {
  rota: string;
  nome: string;
  icon?: IconDefinition;
}

@Component({
  selector: 'help-bot-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public faEmpresaIcone = faBuilding;
  public faHelpBot = faHireAHelper;

  public itensMenu = [] as IItemPaiMenu[];

  public sizePequeno = false;
  public menuHomeclosed = false;

  constructor() {
    this.onWindowResize(window);

    this.itensMenu.push(
      {
        nome: 'Empresa',
        aberto: false,
        icon: faBuilding,
        filhos: [
          {
            rota: '/home/modulo-visualizacao',
            nome: 'Módulos'
          },
          {
            rota: '/home/funcionalidade-visualizacao',
            nome: 'Funcionalidades'
          },
          {
            rota: '/home/campo-visualizacao',
            nome: 'Campos'
          },
          {
            rota: '/home/regra-campo-visualizacao',
            nome: 'Regras de Campos'
          }
        ]
      }
    );
  }

  public onWindowResize(evento: any): void {
    const width =  evento.innerWidth;

    if (width < 1080) {
      this.menuHomeclosed = true;
      this.sizePequeno = true;
    } else {
      this.menuHomeclosed = false;
      this.sizePequeno = false;
    }
  }

  public toogleMenuPai(itemPaiMenu: IItemPaiMenu): void {
    if (itemPaiMenu.aberto) {
      itemPaiMenu.aberto = false;
    } else {
      for (const itemPai of this.itensMenu) {
        itemPai.aberto = false;
      }
      itemPaiMenu.aberto = true;
    }
  }

}
