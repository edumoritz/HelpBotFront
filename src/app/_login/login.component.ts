import { CriptService } from './../core/cript.service';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { faHireAHelper } from '@fortawesome/free-brands-svg-icons';

@Component({
 selector: 'help-bot-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public username: string;
  public password: string;
  public fontAwesomeHelpHirer = faHireAHelper;

  constructor(
    private loginService: LoginService,
    private route: Router
  ) {
    const usernameEncoded = window.localStorage.getItem('HelpBotUser');

    if (usernameEncoded) {
      this.username = CriptService.decode(usernameEncoded);
    }

    const passwordEncoded = window.localStorage.getItem('HelpBotPassword');

    if (passwordEncoded) {
      this.password = CriptService.decode(passwordEncoded);
    }

    if (this.username && this.password) {
      this.login();
    }
  }

  public login(): void {
    window.localStorage.removeItem('HelpBotUser');
    window.localStorage.removeItem('HelpBotPassword');
    this.loginService.login(this.username, this.password).subscribe((resposta) => {
      if (resposta) {
        console.log('Logado');
        window.localStorage.setItem('HelpBotUser', CriptService.encode(this.username));
        window.localStorage.setItem('HelpBotPassword', CriptService.encode(this.password));
      } else {
        console.log('Não logou!!!');
      }
    });
  }

  @HostListener('document:keydown', ['$event'])
  public onKeyDown(evento: KeyboardEvent): void {
    if (this.username && this.password && evento.keyCode === 13) {
      this.login();
    }
  }

}
