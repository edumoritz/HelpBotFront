import { Modulo } from './../../models/funcionalidade/modulo.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractResquestService } from '../../core/abstract-resquest.service';

@Injectable()
export class ModuleService extends AbstractResquestService<Modulo> {

  private readonly apiUrl = 'api/modulo';

  constructor(
    public http: HttpClient
  ) {
    super(http);
  }

  public get api() { return this.apiUrl; }

}
