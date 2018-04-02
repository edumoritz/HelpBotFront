import { Pageable } from './../models/paginacao/pageable.model';
import { Paginacao } from './../models/paginacao/paginacao.model';
import { Observable } from 'rxjs/Rx';
import { Modulo } from './../models/funcionalidade/modulo.model';
import { InterfaceResquestService } from './../core/interface-request.service';

export abstract class AModuleService implements InterfaceResquestService<Modulo> {

  public abstract post(objeto: Modulo): Observable<Modulo>;

  public abstract put(objeto: Modulo): Observable<Modulo>;

  public abstract getAll(paginacao: Paginacao): Observable<Pageable<Modulo>>;

  public abstract getOne(id: number): Observable<Modulo>;

  public abstract delete(id: number): Observable<void>;

}
