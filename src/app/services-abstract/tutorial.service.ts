import { Pageable } from './../models/paginacao/pageable.model';
import { Paginacao } from './../models/paginacao/paginacao.model';
import { Observable } from 'rxjs/Rx';
import { InterfaceResquestService } from './../core/interface-request.service';
import { Tutorial } from '../models/tutorial/tutorial.model';
import { TutorialItens } from '../models/tutorial/tutorial-itens.model';

export abstract class ATutorialService implements InterfaceResquestService<Tutorial> {

  public abstract post(objeto: Tutorial): Observable<Tutorial>;

  public abstract put(objeto: Tutorial): Observable<Tutorial>;

  public abstract getAll(paginacao: Paginacao): Observable<Pageable<Tutorial>>;

  public abstract getOne(id: number): Observable<Tutorial>;

  public abstract delete(id: number): Observable<void>;

  public abstract getItens(id: number): Observable<TutorialItens>;

}
