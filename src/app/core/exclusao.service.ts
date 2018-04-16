// import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ExclusaoComponent } from '../core/exclusao.component';

@Injectable()
export class ExclusaoService {

  constructor(
    // private matDialog: MatDialog
  ) { }

  /*
  public openModalExclusao(exclusao: Observable<void>): Observable<boolean> {
    const dialogRef = this.matDialog.open(ExclusaoComponent, {
      data: exclusao
    });

    return dialogRef.afterClosed();
  }*/

}
