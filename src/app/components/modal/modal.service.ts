import { Injectable } from '@angular/core';
import { Type } from '@angular/core';
import { Component } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { ModalSuperComponent } from './modal-super.component';

@Injectable()
export class ModalService {

  constructor() { }

  public addModal<Parametros, Resposta>(
    component: Type<ModalSuperComponent<Parametros, Resposta>>
  ): Observable<Resposta> {
    
  }

}
