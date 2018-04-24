import { LoginEventService } from './../core/login-event.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { faHireAHelper } from '@fortawesome/free-brands-svg-icons';
import { faHubspot } from '@fortawesome/free-brands-svg-icons';
import { faElementor } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';

import { LoginService } from '../core/login.service';

export interface IItemPaiMenu {
  nome: string;
  filhos: IItemFilhoMenu[];
  aberto: boolean;
  icon: IconDefinition;
}

export interface IItemFilhoMenu {
  acao: () => void;
  nome: string;
  icon: IconDefinition;
}

@Component({
  selector: 'help-bot-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public faHelpBot = faHireAHelper;

  public itensMenu = [] as IItemPaiMenu[];

  public sizePequeno = false;
  public menuHomeclosed = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private loginEventService: LoginEventService
  ) {
    this.onWindowResize(window);

    this.itensMenu.push(
      {
        nome: 'Empresa',
        aberto: false,
        icon: faBuilding,
        filhos: [
          {
            acao: () => this.router.navigate(['/home/modulo-visualizacao']),
            nome: 'Módulos',
            icon: faThLarge
          },
          {
            acao: () => this.router.navigate(['/home/funcionalidade-visualizacao']),
            nome: 'Funcionalidades',
            icon: faHubspot
          },
          {
            acao: () => this.router.navigate(['/home/campo-visualizacao']),
            nome: 'Campos',
            icon: faEdit
          },
          {
            acao: () => this.router.navigate(['/home/regra-campo-visualizacao']),
            nome: 'Regras de Campos',
            icon: faCog
          },
          {
            acao: () => this.router.navigate(['/home/demo-visualizacao']),
            nome: 'Demonstração',
            icon: faCog
          }
        ]
      },
      {
        nome: 'Conta',
        aberto: false,
        icon: faElementor,
        filhos: [
          {
            acao: () => this.router.navigate(['']),
            nome: 'Perfil',
            icon: faUser
          },
          {
            acao: () => this.logout(),
            nome: 'Sair',
            icon: faSignOutAlt
          }
        ]
      }
    );
  }

  public logout(): void {
    this.loginService.logout();
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
