import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginEventService {

  private loginSubject = new Subject<boolean>();

  public getLoginEvent(): Observable<boolean> {
    return this.loginSubject.asObservable();
  }

  public login(): void {
    this.loginSubject.next(true);
  }

  public logout(): void {
    this.loginSubject.next(false);
  }

}
