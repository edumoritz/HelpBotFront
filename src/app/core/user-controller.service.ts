import { LoginEventService } from './login-event.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Usuario } from '../models/usuario/usuario.model';

@Injectable()
export class UserControllerService {

  public userLogado: Usuario;

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

  public getUserLogado(): Observable<Usuario> {
    return new Observable<Usuario>((observer) => {
      if (this.userLogado) {
        observer.next(this.userLogado);
      } else {
        this.httpClient.get<Usuario>('/api/usuarios/logado')
        .subscribe((res) => {
          this.userLogado = res;
          observer.next(this.userLogado);
      });
      }
    });
  }

}