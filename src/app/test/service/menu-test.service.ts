import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AMenuService } from '../../services-abstract/menu.service';
import { Menu } from '../../models/menu/menu.model';

@Injectable()
export class MenuTestService implements AMenuService {

  constructor() { }

  public getMenu(id: number): Observable<Menu[]> {
    return null;
  }

}
