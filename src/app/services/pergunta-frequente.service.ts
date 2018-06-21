import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { ResquestService } from '../core/resquest.service';

import { Pageable } from '../models/paginacao/pageable.model';
import { Paginacao } from '../models/paginacao/paginacao.model';
import { PerguntaFrequente } from '../models/perguntas-frequentes/pergunta-frequente.model';
import { APerguntaFrequenteService } from '../services-abstract/pergunta-frequente.service';

@Injectable()
export class PerguntaFrequenteService extends APerguntaFrequenteService {

  private readonly apiUrl = 'api/pergunta-frequente';

  private readonly requestService: ResquestService<PerguntaFrequente>;

  constructor(
    public http: HttpClient
  ) {
    super();
    this.requestService = new ResquestService<PerguntaFrequente>(this.http, this.apiUrl);
  }

  public post(objeto: PerguntaFrequente): Observable<PerguntaFrequente> {
    return this.requestService.post(objeto);
  }

  public put(objeto: PerguntaFrequente): Observable<PerguntaFrequente> {
    return this.requestService.put(objeto);
  }

  public getAll(paginacao: Paginacao): Observable<Pageable<PerguntaFrequente>> {
    return this.requestService.getAll(paginacao);
  }

  public getOne(id: number): Observable<PerguntaFrequente> {
    return this.requestService.getOne(id);
  }

  public delete(id: number): Observable<void> {
    return this.requestService.delete(id);
  }

  // public getBySearch(paginacao: Paginacao): Observable<Pageable<PerguntaFrequente>> {
  //   return this.requestService.getBySearch(paginacao);
  // }

}
