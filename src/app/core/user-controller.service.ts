import { LoginEventService } from './login-event.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Funcionario } from './../models/funcionario.model';

@Injectable()
export class UserControllerService {

  public userLogado: Funcionario;

  constructor(
    private httpClient: HttpClient,
    private loginEventService: LoginEventService
  ) {
    this.loginEventService.getLoginEvent().subscribe((evento) => {
      if (!evento) {
        this.userLogado = null;
      }
    });
  }

  public getUserLogado(): Observable<Funcionario> {
    return new Observable<Funcionario>((observer) => {
      if (this.userLogado) {
        observer.next(this.userLogado);
      } else {
        this.httpClient.get<Funcionario>('/api/funcionarios/logado')
        .subscribe((res) => {
          this.userLogado = res;
          observer.next(this.userLogado);
      });
      }
    });
  }

}