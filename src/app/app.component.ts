import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserControllerService } from './core/user-controller.service';

import { LoginEventService } from './core/login-event.service';

@Component({
  selector: 'help-bot',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private loginEventService: LoginEventService,
    private router: Router,
    private userControllerService: UserControllerService
  ) {

    // if (!this.websocketService.isConected()) {
    //   this.websocketService.connect();
    // }

    this.loginEventService.getLoginEvent().subscribe((evento) => {

      if (!evento) {
        this.router.navigate(['/login']);
        window.localStorage.removeItem('HelpBotUser');
        window.localStorage.removeItem('HelpBotPassword');

        // if (this.websocketService.isConected()) {
        //   this.websocketService.disconnect();
        // }
      } else {

        // if (!this.websocketService.isConected()) {
        //   this.websocketService.connect();
        //   this.websocketService.subscribeCozinha().subscribe((pedidoPrato) => {
        //     this.cozinhaWebsocketService.notify(pedidoPrato);
        //   });
        // }

        this.router.navigate(['/home']);
      }

    });
  }

}
