import { Observable } from 'rxjs/Rx';

import { Pageable } from '../../models/paginacao/pageable.model';
import { Paginacao } from '../../models/paginacao/paginacao.model';
import { RegraCampo } from '../../models/funcionalidade/regra-campo.model';
import { ARegraCampoService } from '../../services-abstract/regra-campo.service';

export class RegraCampoTestService implements ARegraCampoService {

  private readonly listaCampo = new Map<number, RegraCampo>();
  private idPadrao = 1;

  public post(campo: RegraCampo): Observable<RegraCampo> {
    return new Observable((observer) => {
      if (campo.id) {
        this.put(campo);
      }
      campo.id = this.idPadrao;
      this.idPadrao++;

      this.listaCampo.set(campo.id, campo);
      observer.next(campo);
      observer.complete();
    });
  }

  public put(campo: RegraCampo): Observable<RegraCampo> {
    return new Observable((observer) => {
      if (!campo.id) {
        this.post(campo);
      }

      const RegraCampoCadastrado = this.listaCampo.get(campo.id);

      if (RegraCampoCadastrado == null) {
        throw new Error('Campo não cadastrado');
      }

      this.listaCampo.set(campo.id, campo);

      observer.next(campo);
      observer.complete();
    });
  }

  public getAll(paginacao: Paginacao): Observable<Pageable<RegraCampo>> {
    return new Observable<Pageable<RegraCampo>>((observer) => {

      const page = paginacao.page;
      const itensPerPage = paginacao.itensPerPage;

      const start = page * itensPerPage;
      const end = start + itensPerPage;

      const list = [] as RegraCampo[];
      let index = 0;
      this.listaCampo.forEach((value) => {
        if (index >= start && index < end) {
          list.push(value);
        }

        index++;
      });

      observer.next(new Pageable<RegraCampo>(this.listaCampo.size, list));
      observer.complete();
    });
  }

  public getOne(id: number): Observable<RegraCampo> {
    return new Observable<RegraCampo>((observer) => {
      observer.next(this.listaCampo.get(id));
      observer.complete();
    });
  }

  public delete(id: number): Observable<void> {
    return new Observable<void>((observer) => {
      this.listaCampo.delete(id);
      observer.next();
      observer.complete();
    });
  }
}
