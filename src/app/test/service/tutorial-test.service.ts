import { Observable } from 'rxjs/Rx';

import { Pageable } from '../../models/paginacao/pageable.model';
import { Paginacao } from '../../models/paginacao/paginacao.model';
import { ATutorialService } from '../../services-abstract/tutorial.service';
import { Tutorial } from '../../models/tutorial/tutorial.model';
import { TutorialItens } from '../../models/tutorial/tutorial-itens.model';

export class TutorialTestService implements ATutorialService {

  private readonly listaTutorial = new Map<number, Tutorial>();
  private idPadrao = 1;

  constructor() {
    this.post({ nome: 'Teste Tutorial 1' }).subscribe();
    this.post({ nome: 'Teste Tutorial 2' }).subscribe();
    this.post({ nome: 'Teste Tutorial 3' }).subscribe();
    this.post({ nome: 'Teste Tutorial 4' }).subscribe();
    this.post({ nome: 'Teste Tutorial 5' }).subscribe();
  }

  public post(tutorial: Tutorial): Observable<Tutorial> {
    return new Observable((observer) => {
      if (tutorial.id) {
        this.put(tutorial);
      }
      tutorial.id = this.idPadrao;
      this.idPadrao++;

      this.listaTutorial.set(tutorial.id, tutorial);
      observer.next(tutorial);
      observer.complete();
    });
  }

  public postItens(objeto: TutorialItens): Observable<TutorialItens> {
    return null;
  }

  public put(tutorial: Tutorial): Observable<Tutorial> {
    return new Observable((observer) => {
      if (!tutorial.id) {
        this.post(tutorial);
      }

      const TutorialCadastrado = this.listaTutorial.get(tutorial.id);

      if (TutorialCadastrado == null) {
        throw new Error('Campo não cadastrado');
      }

      this.listaTutorial.set(tutorial.id, tutorial);

      observer.next(tutorial);
      observer.complete();
    });
  }

  public getAll(paginacao: Paginacao): Observable<Pageable<Tutorial>> {
    return new Observable<Pageable<Tutorial>>((observer) => {

      const page = paginacao.page;
      const itensPerPage = paginacao.itensPerPage;

      const start = page * itensPerPage;
      const end = start + itensPerPage;

      const list = [] as Tutorial[];
      let index = 0;
      this.listaTutorial.forEach((value) => {
        if (index >= start && index < end) {
          list.push(value);
        }

        index++;
      });

      observer.next(new Pageable<Tutorial>(this.listaTutorial.size, list));
      observer.complete();
    });
  }

  public getOne(id: number): Observable<Tutorial> {
    return new Observable<Tutorial>((observer) => {
      observer.next(this.listaTutorial.get(id));
      observer.complete();
    });
  }

  public delete(id: number): Observable<void> {
    return new Observable<void>((observer) => {
      this.listaTutorial.delete(id);
      observer.next();
      observer.complete();
    });
  }

  public getItens(id: number): Observable<TutorialItens> {
    throw new Error('Not Implemented');
  }

  public getBySearch(query: string): Observable<Pageable<Tutorial>> {
    return null;
  }
}
