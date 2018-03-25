import { Observable } from 'rxjs/Observable';
import { HttpInterceptor } from '@angular/common/http';
import { HttpSentEvent } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaderResponse } from '@angular/common/http';
import { HttpProgressEvent } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpUserEvent } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

import { Injector, Injectable } from '@angular/core';

import 'rxjs/add/operator/do';
import { TokenService } from '../core/token.service';
import { LoginEventService } from '../core/login-event.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  public intercept(
    request: HttpRequest<any>, next: HttpHandler
  ): Observable<HttpSentEvent |
    HttpHeaderResponse |
    HttpProgressEvent |
    HttpResponse<any> |
    HttpUserEvent<any>> {

      const tokenService = this.injector.get(TokenService);

      if (!request.headers.has('Authorization')) {
        request = request.clone({
          setHeaders: {
            // 'Content-Type': 'application/x-www-form-urlencoded',
            // Accept: 'application/json',
            Authorization: `Bearer ${tokenService.getAccessToken()}`
          }
        });
      }

      return next.handle(request).do((event: HttpEvent<any>) => {
        // vazio.
      }, (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            const loginEventService = this.injector.get(LoginEventService);
            loginEventService.logout();
          }
        } else {
          if (err.status === 401) {
            const loginEventService = this.injector.get(LoginEventService);
            loginEventService.logout();
          }
        }
      });

  }

}