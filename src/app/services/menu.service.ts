import { AMenuService } from '../services-abstract/menu.service';
import { Menu } from '../models/menu/menu.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuService extends AMenuService {

  private readonly apiUrl = 'api/menu/';

  constructor(
    public http: HttpClient
  ) {
    super();
  }

  public getMenu(id: number): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.apiUrl + id);
  }

}
