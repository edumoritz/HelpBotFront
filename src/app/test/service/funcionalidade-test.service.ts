import { Observable } from 'rxjs/Rx';

import { Pageable } from '../../models/paginacao/pageable.model';
import { Paginacao } from '../../models/paginacao/paginacao.model';
import { Funcionalidade } from '../../models/funcionalidade/funciondalidade.model';
import { AFuncionalidadeService } from '../../services-abstract/funcionalidade.service';

export class FuncionalidadeTestService implements AFuncionalidadeService {

  private readonly listaFuncionalidades = new Map<number, Funcionalidade>();
  private idPadrao = 1;

  public post(func: Funcionalidade): Observable<Funcionalidade> {
    return new Observable((observer) => {
      if (func.id) {
        this.put(func);
      }
      func.id = this.idPadrao;
      this.idPadrao++;

      this.listaFuncionalidades.set(func.id, func);
      observer.next(func);
      observer.complete();
    });
  }

  public put(func: Funcionalidade): Observable<Funcionalidade> {
    return new Observable((observer) => {
      if (!func.id) {
        this.post(func);
      }

      const FuncionalidadeCadastrada = this.listaFuncionalidades.get(func.id);

      if (FuncionalidadeCadastrada == null) {
        throw new Error('Funcionalidade não cadastrada');
      }

      this.listaFuncionalidades.set(func.id, func);

      observer.next(func);
      observer.complete();
    });
  }

  public getAll(paginacao: Paginacao): Observable<Pageable<Funcionalidade>> {
    return new Observable<Pageable<Funcionalidade>>((observer) => {

      const page = paginacao.page;
      const itensPerPage = paginacao.itensPerPage;

      const start = page * itensPerPage;
      const end = start + itensPerPage;

      const list = [] as Funcionalidade[];
      let index = 0;
      this.listaFuncionalidades.forEach((value) => {
        if (index >= start && index < end) {
          list.push(value);
        }

        index++;
      });

      observer.next(new Pageable<Funcionalidade>(this.listaFuncionalidades.size, list));
      observer.complete();
    });
  }

  public getOne(id: number): Observable<Funcionalidade> {
    return new Observable<Funcionalidade>((observer) => {
      observer.next(this.listaFuncionalidades.get(id));
      observer.complete();
    });
  }

  public delete(id: number): Observable<void> {
    return new Observable<void>((observer) => {
      this.listaFuncionalidades.delete(id);
      observer.next();
      observer.complete();
    });
  }

}
