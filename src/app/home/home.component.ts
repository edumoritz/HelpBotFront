import { Component } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

export interface IItemPaiMenu {
  nome: string;
  filhos: IItemFilhoMenu[];
  aberto: boolean;
}

export interface IItemFilhoMenu {
  rota: string;
  nome: string;
}

@Component({
  selector: 'help-bot-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public faEmpresaIcone = faBuilding;

  public itensMenu = [] as IItemPaiMenu[];

  constructor() {
    this.itensMenu.push(
      {
        nome: 'Empresa',
        aberto: false,
        filhos: [
          {
            rota: '/home/modulo-visualizacao',
            nome: 'Módulo'
          }
        ]
      }
    );
  }

}
