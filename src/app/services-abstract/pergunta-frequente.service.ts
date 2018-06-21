import { Pageable } from './../models/paginacao/pageable.model';
import { Paginacao } from './../models/paginacao/paginacao.model';
import { Observable } from 'rxjs/Rx';
import { InterfaceResquestService } from './../core/interface-request.service';
import { Tutorial } from '../models/tutorial/tutorial.model';
import { PerguntaFrequente } from '../models/perguntas-frequentes/pergunta-frequente.model';

export abstract class APerguntaFrequenteService implements InterfaceResquestService<PerguntaFrequente> {

  public abstract post(objeto: PerguntaFrequente): Observable<PerguntaFrequente>;

  public abstract put(objeto: PerguntaFrequente): Observable<PerguntaFrequente>;

  public abstract getAll(paginacao: Paginacao): Observable<Pageable<PerguntaFrequente>>;

  public abstract getOne(id: number): Observable<PerguntaFrequente>;

  public abstract delete(id: number): Observable<void>;

  // public abstract getBySearch(): Observable<Pageable<PerguntaFrequente>>;

}
