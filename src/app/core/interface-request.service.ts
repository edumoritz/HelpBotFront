import { Pageable } from './../models/paginacao/pageable.model';
import { Paginacao } from './../models/paginacao/paginacao.model';
import { Observable } from 'rxjs/Rx';

export interface InterfaceResquestService<T> {

  post(objeto: T): Observable<T>;

  put(objeto: T): Observable<T>;

  getAll(paginacao: Paginacao): Observable<Pageable<T>>;

  getOne(id: number): Observable<T>;

  delete(id: number): Observable<void>;

}
