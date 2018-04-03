import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { ResquestService } from '../core/resquest.service';

import { Pageable } from '../models/paginacao/pageable.model';
import { Paginacao } from '../models/paginacao/paginacao.model';

import { RegraCampo } from '../models/funcionalidade/regra-campo.model';
import { ARegraCampoService } from '../services-abstract/regra-campo.service';

@Injectable()
export class RegraCampoService extends ARegraCampoService {

  private readonly apiUrl = 'api/regra-campo';

  private readonly requestService: ResquestService<RegraCampo>;

  constructor(
    public http: HttpClient
  ) {
    super();
    this.requestService = new ResquestService<RegraCampo>(this.http, this.apiUrl);
  }

  public post(objeto: RegraCampo): Observable<RegraCampo> {
    return this.requestService.post(objeto);
  }

  public put(objeto: RegraCampo): Observable<RegraCampo> {
    return this.requestService.put(objeto);
  }

  public getAll(paginacao: Paginacao): Observable<Pageable<RegraCampo>> {
    return this.requestService.getAll(paginacao);
  }

  public getOne(id: number): Observable<RegraCampo> {
    return this.requestService.getOne(id);
  }

  public delete(id: number): Observable<void> {
    return this.requestService.delete(id);
  }

}
