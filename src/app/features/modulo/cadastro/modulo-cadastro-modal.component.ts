import { ModalSuperComponent } from '../../../components/modal/modal-super.component';
import { ModalService } from '../../../components/modal/modal.service';
import { Component } from '@angular/core';

@Component({
  selector: 'help-bot-modulo-cadastro-modal',
  templateUrl: './modulo-cadastro-modal.component.html'
})
export class ModuloCadastroModalComponent extends ModalSuperComponent<void, void> {

  constructor(
    public modalService: ModalService
  ) {
    super(modalService);
  }

}
