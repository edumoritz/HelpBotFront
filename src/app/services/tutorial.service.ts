import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { ResquestService } from '../core/resquest.service';

import { Pageable } from '../models/paginacao/pageable.model';
import { Paginacao } from '../models/paginacao/paginacao.model';

import { ATutorialService } from '../services-abstract/tutorial.service';
import { Tutorial } from '../models/tutorial/tutorial.model';

@Injectable()
export class TutorialService extends ATutorialService {

  private readonly apiUrl = 'api/tutorial';

  private readonly requestService: ResquestService<Tutorial>;

  constructor(
    public http: HttpClient
  ) {
    super();
    this.requestService = new ResquestService<Tutorial>(this.http, this.apiUrl);
  }

  public post(objeto: Tutorial): Observable<Tutorial> {
    return this.requestService.post(objeto);
  }

  public put(objeto: Tutorial): Observable<Tutorial> {
    return this.requestService.put(objeto);
  }

  public getAll(paginacao: Paginacao): Observable<Pageable<Tutorial>> {
    return this.requestService.getAll(paginacao);
  }

  public getOne(id: number): Observable<Tutorial> {
    return this.requestService.getOne(id);
  }

  public delete(id: number): Observable<void> {
    return this.requestService.delete(id);
  }

}