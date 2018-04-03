import { Pageable } from './../models/paginacao/pageable.model';
import { Paginacao } from './../models/paginacao/paginacao.model';
import { Observable } from 'rxjs/Rx';
import { InterfaceResquestService } from './../core/interface-request.service';
import { RegraCampo } from '../models/funcionalidade/regra-campo.model';

export abstract class ARegraCampoService implements InterfaceResquestService<RegraCampo> {

  public abstract post(objeto: RegraCampo): Observable<RegraCampo>;

  public abstract put(objeto: RegraCampo): Observable<RegraCampo>;

  public abstract getAll(paginacao: Paginacao): Observable<Pageable<RegraCampo>>;

  public abstract getOne(id: number): Observable<RegraCampo>;

  public abstract delete(id: number): Observable<void>;

}
