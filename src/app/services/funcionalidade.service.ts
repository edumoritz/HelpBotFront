import { Injectable } from '@angular/core';
import { ResquestService } from '../core/resquest.service';
import { Modulo } from '../models/funcionalidade/modulo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Paginacao } from '../models/paginacao/paginacao.model';
import { Pageable } from '../models/paginacao/pageable.model';
import { Funcionalidade } from '../models/funcionalidade/funciondalidade.model';
import { AFuncionalidadeService } from '../services-abstract/funcionalidade.service';

@Injectable()
export class FuncionalidadeService extends AFuncionalidadeService {

  private readonly apiUrl = 'api/funcionalidade';

  private readonly requestService: ResquestService<Funcionalidade>;

  constructor(
    public http: HttpClient
  ) {
    super();
    this.requestService = new ResquestService<Funcionalidade>(this.http, this.apiUrl);
  }

  public post(objeto: Funcionalidade): Observable<Funcionalidade> {
    return this.requestService.post(objeto);
  }

  public put(objeto: Funcionalidade): Observable<Funcionalidade> {
    return this.requestService.put(objeto);
  }

  public getAll(paginacao: Paginacao): Observable<Pageable<Funcionalidade>> {
    return this.requestService.getAll(paginacao);
  }

  public getOne(id: number): Observable<Funcionalidade> {
    return this.requestService.getOne(id);
  }

  public delete(id: number): Observable<void> {
    return this.requestService.delete(id);
  }
}
