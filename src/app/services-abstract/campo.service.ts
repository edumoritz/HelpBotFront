import { Pageable } from './../models/paginacao/pageable.model';
import { Paginacao } from './../models/paginacao/paginacao.model';
import { Observable } from 'rxjs/Rx';
import { InterfaceResquestService } from './../core/interface-request.service';
import { Campo } from '../models/funcionalidade/campo.model';

export abstract class ACampoService implements InterfaceResquestService<Campo> {

  public abstract post(objeto: Campo): Observable<Campo>;

  public abstract put(objeto: Campo): Observable<Campo>;

  public abstract getAll(paginacao: Paginacao): Observable<Pageable<Campo>>;

  public abstract getOne(id: number): Observable<Campo>;

  public abstract delete(id: number): Observable<void>;

}
