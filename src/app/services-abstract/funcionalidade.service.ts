import { Pageable } from './../models/paginacao/pageable.model';
import { Paginacao } from './../models/paginacao/paginacao.model';
import { Observable } from 'rxjs/Rx';
import { InterfaceResquestService } from './../core/interface-request.service';
import { Funcionalidade } from '../models/funcionalidade/funciondalidade.model';

export abstract class AFuncionalidadeService implements InterfaceResquestService<Funcionalidade> {

  public abstract post(objeto: Funcionalidade): Observable<Funcionalidade>;

  public abstract put(objeto: Funcionalidade): Observable<Funcionalidade>;

  public abstract getAll(paginacao: Paginacao): Observable<Pageable<Funcionalidade>>;

  public abstract getOne(id: number): Observable<Funcionalidade>;

  public abstract delete(id: number): Observable<void>;

}
