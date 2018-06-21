import { Observable } from 'rxjs/Rx';

import { Pageable } from '../../models/paginacao/pageable.model';
import { Paginacao } from '../../models/paginacao/paginacao.model';
import { Modulo } from '../../models/funcionalidade/modulo.model';
import { AModuleService } from '../../services-abstract/modulo.service';
import { APerguntaFrequenteService } from '../../services-abstract/pergunta-frequente.service';
import { PerguntaFrequente } from '../../models/perguntas-frequentes/pergunta-frequente.model';


export class PerguntaFrequenteTestService implements APerguntaFrequenteService {

  private readonly listaPergunta = new Map<number, PerguntaFrequente>();
  private idPadrao = 1;

  constructor() {
    this.post({ pergunta: 'Teste Pergunta Frequente' }).subscribe();
    this.post({ pergunta: 'Teste Pergunta Frequente' }).subscribe();
    this.post({ pergunta: 'Teste Pergunta Frequente' }).subscribe();
    this.post({ pergunta: 'Teste Pergunta Frequente' }).subscribe();
    this.post({ pergunta: 'Teste Pergunta Frequente' }).subscribe();
  }

  public post(frequente: PerguntaFrequente): Observable<PerguntaFrequente> {
    return new Observable((observer) => {
      if (frequente.id) {
        this.put(frequente);
      }
      frequente.id = this.idPadrao;
      this.idPadrao++;

      this.listaPergunta.set(frequente.id, frequente);
      observer.next(frequente);
      observer.complete();
    });
  }

  public put(frequente: PerguntaFrequente): Observable<PerguntaFrequente> {
    return new Observable((observer) => {
      if (!frequente.id) {
        this.post(frequente);
      }

      const frequenteCadastrado = this.listaPergunta.get(frequente.id);

      if (frequenteCadastrado == null) {
        throw new Error('Pergunta Frequente não cadastrado');
      }

      this.listaPergunta.set(frequente.id, frequente);

      observer.next(frequente);
      observer.complete();
    });
  }

  public getAll(paginacao: Paginacao): Observable<Pageable<PerguntaFrequente>> {
    return new Observable<Pageable<PerguntaFrequente>>((observer) => {

      const page = paginacao.page;
      const itensPerPage = paginacao.itensPerPage;

      const start = page * itensPerPage;
      const end = start + itensPerPage;

      const list = [] as PerguntaFrequente[];
      let index = 0;
      this.listaPergunta.forEach((value) => {
        if (index >= start && index < end) {
          list.push(value);
        }

        index++;
      });

      observer.next(new Pageable<PerguntaFrequente>(this.listaPergunta.size, list));
      observer.complete();
    });
  }

  public getOne(id: number): Observable<PerguntaFrequente> {
    return new Observable<PerguntaFrequente>((observer) => {
      observer.next(this.listaPergunta.get(id));
      observer.complete();
    });
  }

  public delete(id: number): Observable<void> {
    return new Observable<void>((observer) => {
      this.listaPergunta.delete(id);
      observer.next();
      observer.complete();
    });
  }

  public getBySearch(): Observable<Pageable<PerguntaFrequente>> {
    return new Observable<Pageable<PerguntaFrequente>>((observer) => {

      const list = [] as PerguntaFrequente[];

      observer.next(new Pageable<PerguntaFrequente>(this.listaPergunta.size, list));
      observer.complete();
    });
  }

}
