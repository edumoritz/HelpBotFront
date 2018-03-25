import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserControllerService } from './core/user-controller.service';

import { LoginEventService } from './core/login-event.service';

@Component({
  selector: 'help-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private loginEventService: LoginEventService,
    private router: Router,
    private userControllerService: UserControllerService
  ) {

    /**
     * if (!this.websocketService.isConected()) {
      this.websocketService.connect();
    }

    this.loginEventService.getLoginEvent().subscribe((evento) => {

      if (!evento) {
        this.router.navigate(['/login']);
        window.localStorage.removeItem('UniRestaurantUser');
        window.localStorage.removeItem('UniRestaurantPassword');

        if (this.websocketService.isConected()) {
          this.websocketService.disconnect();
        }
      } else {

        if (!this.websocketService.isConected()) {
          this.websocketService.connect();
          this.websocketService.subscribeCozinha().subscribe((pedidoPrato) => {
            this.cozinhaWebsocketService.notify(pedidoPrato);
          });
        }

        this.userControllerService.getUserLogado().subscribe((user) => {
          switch (user.pemissao) {
            case 'GARCOM':
              this.router.navigate(['/app/pedidos']);
              break;
            case 'BARMAN':
              this.router.navigate(['/app/bebidas']);
              break;
            case 'CAIXA':
              this.router.navigate(['/app/caixa']);
              break;
            case 'COZINHEIRO':
              this.router.navigate(['/app/cozinha']);
              break;
            case 'ADMIN':
              this.router.navigate(['/app/']);
              return;
          }
        });
      }

    });
     */
  }

}
