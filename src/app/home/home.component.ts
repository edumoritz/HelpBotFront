import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHireAHelper, IconDefinition } from '@fortawesome/free-brands-svg-icons';

import { LoginService } from '../core/login.service';
import { UserControllerService } from '../core/user-controller.service';
import { AMenuService } from '../services-abstract/menu.service';

export interface IItemPaiMenu {
  nome: string;
  filhos: IItemFilhoMenu[];
  aberto: boolean;
  icon: IconDefinition;
}

export interface IItemFilhoMenu {
  acao: () => void;
  nome: string;
  // icon: IconDefinition;
}

@Component({
  selector: 'help-bot-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public faHelpBot = faHireAHelper;

  public itensMenu = [] as IItemFilhoMenu[];

  public sizePequeno = false;
  public menuHomeclosed = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private menuService: AMenuService,
    private userControllerService: UserControllerService
  ) {
    this.onWindowResize(window);

    this.userControllerService.getUserLogado().subscribe((usuario) => {
      this.menuService.getMenu(usuario.id).subscribe((menus) => {
        for (const menu of menus) {
          this.itensMenu.push({
            acao: () => this.router.navigate([menu.link]),
            nome: menu.nome
          });
        }
      });
    });


    // this.itensMenu.push(
    //   {
    //     nome: 'Empresa',
    //     aberto: false,
    //     icon: faBuilding,
    //     filhos: [
    //       {
    //         acao: () => this.router.navigate(['/home/modulo-visualizacao']),
    //         nome: 'Módulos',
    //         icon: faThLarge
    //       },
    //       {
    //         acao: () => this.router.navigate(['/home/funcionalidade-visualizacao']),
    //         nome: 'Funcionalidades',
    //         icon: faHubspot
    //       },
    //       {
    //         acao: () => this.router.navigate(['/home/campo-visualizacao']),
    //         nome: 'Campos',
    //         icon: faEdit
    //       },
    //       {
    //         acao: () => this.router.navigate(['/home/regra-campo-visualizacao']),
    //         nome: 'Regras de Campos',
    //         icon: faCog
    //       },
    //       {
    //         acao: () => this.router.navigate(['/home/demo-visualizacao']),
    //         nome: 'Demonstração',
    //         icon: faCog
    //       },
    //       {
    //         acao: () => this.router.navigate(['/home/tutorial-visualizacao']),
    //         nome: 'Tutorial',
    //         icon: faCog
    //       },
    //       {
    //         acao: () => this.router.navigate(['/home/pesquisa-perguntas']),
    //         nome: 'Pesquisar',
    //         icon: faSearch
    //       }
    //     ]
    //   },
    //   {
    //     nome: 'Conta',
    //     aberto: false,
    //     icon: faElementor,
    //     filhos: [
    //       {
    //         acao: () => this.router.navigate(['']),
    //         nome: 'Perfil',
    //         icon: faUser
    //       },
    //       {
    //         acao: () => this.logout(),
    //         nome: 'Sair',
    //         icon: faSignOutAlt
    //       }
    //     ]
    //   }
    // );
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
    // if (itemPaiMenu.aberto) {
    //   itemPaiMenu.aberto = false;
    // } else {
    //   for (const itemPai of this.itensMenu) {
    //     itemPai.aberto = false;
    //   }
    //   itemPaiMenu.aberto = true;
    // }
  }

}
