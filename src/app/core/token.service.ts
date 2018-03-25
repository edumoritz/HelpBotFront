import { Observable } from 'rxjs/Observable';
import { LoginEventService } from './login-event.service';
import { Token } from './../models/token.model';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class TokenService {

  private token: Token;

  constructor(
    private loginEventService: LoginEventService,
    private httpClient: HttpClient
  ) {
    this.loginEventService.getLoginEvent().subscribe((evento) => {
      if (!evento) {
        this.token = null;
        window.localStorage.removeItem('HelpBotToken');
      }
    });
  }

  public setToken(token: Token): void {
    this.token = token;
    window.localStorage.setItem('HelpBotToken', token.access_token);
  }

  public getAccessToken(): string {
    if (this.token) {
      return this.token.access_token;
    } else {
      const token = window.localStorage.getItem('HelpBotToken');
      if (token) {
        return token;
      }
    }

    return null;
  }

}