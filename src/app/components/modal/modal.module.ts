import { NgModule } from '@angular/core';

import { ModalService } from './modal.service';

import { ModalHeaderComponent } from './components/header/modal-header.component';
import { ModalComponent } from './components/modal.component';
import { ModalBodyComponent } from './components/body/modal-body.component';
import { ModalFooterComponent } from './components/footer/modal-footer.component';

@NgModule({
  declarations: [
    ModalHeaderComponent,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [
    ModalService
  ],
  exports: [
    ModalHeaderComponent,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent
  ]
})
export class ModalModule { }
