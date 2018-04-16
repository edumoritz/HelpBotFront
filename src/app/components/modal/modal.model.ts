import { ComponentRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { ModalSuperComponent } from './modal-super.component';

export interface Modal<Parametros, Resposta> {
  component: ComponentRef<ModalSuperComponent<Parametros, Resposta>>;
  closeSubject: Subject<Resposta>;
}
