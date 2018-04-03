import { Observable } from 'rxjs/Rx';

import { Pageable } from '../../models/paginacao/pageable.model';
import { Paginacao } from '../../models/paginacao/paginacao.model';
import { AModuleService } from '../../services-abstract/module.service';
import { Campo } from '../../models/funcionalidade/campo.model';

export class ModuleTestService implements AModuleService {

  private readonly listaCampos = new Map<number, Campo>();
  private idPadrao = 1;

  public post(campo: Campo): Observable<Campo> {
    return new Observable((observer) => {
      if (campo.id) {
        this.put(campo);
      }
      campo.id = this.idPadrao;
      this.idPadrao++;

      this.listaCampos.set(campo.id, campo);
      observer.next(campo);
      observer.complete();
    });
  }

  public put(campo: Campo): Observable<Campo> {
    return new Observable((observer) => {
      if (!campo.id) {
        this.post(campo);
      }

      const moduloCadastrado = this.listaCampos.get(campo.id);

      if (moduloCadastrado == null) {
        throw new Error('Campo não cadastrado');
      }

      this.listaCampos.set(campo.id, campo);

      observer.next(campo);
      observer.complete();
    });
  }

  public getAll(paginacao: Paginacao): Observable<Pageable<Campo>> {
    return new Observable<Pageable<Campo>>((observer) => {

      const page = paginacao.page;
      const itensPerPage = paginacao.itensPerPage;

      const start = page * itensPerPage;
      const end = start + itensPerPage;

      const list = [] as Campo[];
      let index = 0;
      this.listaCampos.forEach((value) => {
        if (index >= start && index < end) {
          list.push(value);
        }

        index++;
      });

      observer.next(new Pageable<Campo>(this.listaCampos.size, list));
      observer.complete();
    });
  }

  public getOne(id: number): Observable<Campo> {
    return new Observable<Campo>((observer) => {
      observer.next(this.listaCampos.get(id));
      observer.complete();
    });
  }

  public delete(id: number): Observable<void> {
    return new Observable<void>((observer) => {
      this.listaCampos.delete(id);
      observer.next();
      observer.complete();
    });
  }

}
