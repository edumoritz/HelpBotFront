import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { ResquestService } from '../core/resquest.service';

import { Pageable } from '../models/paginacao/pageable.model';
import { Paginacao } from '../models/paginacao/paginacao.model';

import { AModuleService } from '../services-abstract/module.service';
import { Campo } from '../models/funcionalidade/campo.model';

@Injectable()
export class CampoService extends AModuleService {

  private readonly apiUrl = 'api/campo';

  private readonly requestService: ResquestService<Campo>;

  constructor(
    public http: HttpClient
  ) {
    super();
    this.requestService = new ResquestService<Campo>(this.http, this.apiUrl);
  }

  public post(objeto: Campo): Observable<Campo> {
    return this.requestService.post(objeto);
  }

  public put(objeto: Campo): Observable<Campo> {
    return this.requestService.put(objeto);
  }

  public getAll(paginacao: Paginacao): Observable<Pageable<Campo>> {
    return this.requestService.getAll(paginacao);
  }

  public getOne(id: number): Observable<Campo> {
    return this.requestService.getOne(id);
  }

  public delete(id: number): Observable<void> {
    return this.requestService.delete(id);
  }

}
