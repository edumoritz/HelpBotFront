import { Observable } from 'rxjs/Rx';

import { Pageable } from '../../models/paginacao/pageable.model';
import { Paginacao } from '../../models/paginacao/paginacao.model';
import { Modulo } from '../../models/funcionalidade/modulo.model';
import { AModuleService } from '../../services-abstract/modulo.service';

export class ModuleTestService implements AModuleService {

  private readonly listaModulos = new Map<number, Modulo>();
  private idPadrao = 1;

  constructor() {
    this.post({ nome: 'aaa' }).subscribe();
    this.post({ nome: '123' }).subscribe();
    this.post({ nome: '456' }).subscribe();
    this.post({ nome: '789' }).subscribe();
    this.post({ nome: 'dsf' }).subscribe();
    this.post({ nome: 'dsf' }).subscribe();
    this.post({ nome: 'dsf' }).subscribe();
    this.post({ nome: 'dsf' }).subscribe();
    this.post({ nome: 'dsf' }).subscribe();
    this.post({ nome: 'dsf' }).subscribe();
    this.post({ nome: 'dsf' }).subscribe();
    this.post({ nome: 'dsf' }).subscribe();
    this.post({ nome: 'dsf' }).subscribe();
    this.post({ nome: 'dsf' }).subscribe();
    this.post({ nome: 'dsf' }).subscribe();
  }

  public post(modulo: Modulo): Observable<Modulo> {
    return new Observable((observer) => {
      if (modulo.id) {
        this.put(modulo);
      }
      modulo.id = this.idPadrao;
      this.idPadrao++;

      this.listaModulos.set(modulo.id, modulo);
      observer.next(modulo);
      observer.complete();
    });
  }

  public put(modulo: Modulo): Observable<Modulo> {
    return new Observable((observer) => {
      if (!modulo.id) {
        this.post(modulo);
      }

      const moduloCadastrado = this.listaModulos.get(modulo.id);

      if (moduloCadastrado == null) {
        throw new Error('Modulo não cadastrado');
      }

      this.listaModulos.set(modulo.id, modulo);

      observer.next(modulo);
      observer.complete();
    });
  }

  public getAll(paginacao: Paginacao): Observable<Pageable<Modulo>> {
    return new Observable<Pageable<Modulo>>((observer) => {

      const page = paginacao.page;
      const itensPerPage = paginacao.itensPerPage;

      const start = page * itensPerPage;
      const end = start + itensPerPage;

      const list = [] as Modulo[];
      let index = 0;
      this.listaModulos.forEach((value) => {
        if (index >= start && index < end) {
          list.push(value);
        }

        index++;
      });

      observer.next(new Pageable<Modulo>(this.listaModulos.size, list));
      observer.complete();
    });
  }

  public getOne(id: number): Observable<Modulo> {
    return new Observable<Modulo>((observer) => {
      observer.next(this.listaModulos.get(id));
      observer.complete();
    });
  }

  public delete(id: number): Observable<void> {
    return new Observable<void>((observer) => {
      this.listaModulos.delete(id);
      observer.next();
      observer.complete();
    });
  }

}
