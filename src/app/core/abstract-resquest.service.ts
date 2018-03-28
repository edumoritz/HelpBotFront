import { PessoaJuridica } from './../models/pessoa/pessoaJuridica.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

export abstract class AbstractResquestService<T> {

  constructor(
    public http: HttpClient
  ) { }

  public abstract get api(): string;

  public post(objeto: T): Observable<T> {
    return this.http.post<T>(this.api, objeto);
  }

  public put(objeto: T): Observable<T> {
    return this.http.put<T>(this.api, objeto);
  }

  // TODO criar Paginação
  public getAll(paginacao: any): Observable<T[]> {

    // getOptions(paginacao);

    return this.http.get<T[]>(this.api);
  }

  public getOne(id: number): Observable<T> {
    return this.http.get<T>(`${this.api}/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }

}
