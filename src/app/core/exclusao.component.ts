import {Observable} from 'rxjs/Observable';
import {Component} from '@angular/core';
import {Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'help-bot-exclusao',
  templateUrl: './exclusao.component.html'
})
export class ExclusaoComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Observable<void>,
    private matDialogRef: MatDialogRef<ExclusaoComponent>
  ) {}

  public excluir(): void {
    this.data.subscribe(() => this.matDialogRef.close(true));
  }

  public cancelar(): void {
    this.matDialogRef.close(false);
  }

}
