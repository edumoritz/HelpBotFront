import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { ResquestService } from '../core/resquest.service';

import { Pageable } from '../models/paginacao/pageable.model';
import { Paginacao } from '../models/paginacao/paginacao.model';
import { Modulo } from '../models/funcionalidade/modulo.model';
import { AModuleService } from '../services-abstract/modulo.service';


@Injectable()
export class ModuleService extends AModuleService {

  private readonly apiUrl = 'api/modulo';

  private readonly requestService: ResquestService<Modulo>;

  constructor(
    public http: HttpClient
  ) {
    super();
    this.requestService = new ResquestService<Modulo>(this.http, this.apiUrl);
  }

  public post(objeto: Modulo): Observable<Modulo> {
    return this.requestService.post(objeto);
  }

  public put(objeto: Modulo): Observable<Modulo> {
    return this.requestService.put(objeto);
  }

  public getAll(paginacao: Paginacao): Observable<Pageable<Modulo>> {
    return this.requestService.getAll(paginacao);
  }

  public getOne(id: number): Observable<Modulo> {
    return this.requestService.getOne(id);
  }

  public delete(id: number): Observable<void> {
    return this.requestService.delete(id);
  }

}
