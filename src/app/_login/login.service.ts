import { LoginEventService } from '../core/login-event.service';
import { Token } from './../models/token.model';
import { AuthFactory } from './auth-factory.class';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { TokenService } from '../core/token.service';

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private loginEventService: LoginEventService
  ) { }

  public login(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observador) => {
      const authFactory = new AuthFactory();

      authFactory.setUsername(username).setPassword(password);

      const head = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Authorization': authFactory.generateAuthorization()
      });
      this.http.post<Token>(
        '/oauth/token',
        authFactory.generateData(),
        { headers: head }).subscribe((res) => {
          this.tokenService.setToken(res);
          this.loginEventService.login();
          observador.next(true);
          observador.complete();
      }, (res) => {
        observador.next(false);
        observador.complete();
      });
    });
  }



}