import { Menu } from "../models/menu/menu.model";
import { Observable } from "rxjs";


export abstract class AMenuService {

    public abstract getMenu(id: number): Observable<Menu[]>;
}