import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Modulo } from '../../../models/funcionalidade/modulo.model';
import { ModalSuperComponent } from '../../../components/modal/modal-super.component';
import { ModalService } from '../../../components/modal/modal.service';
import { AModuleService } from '../../../services-abstract/modulo.service';

export interface IModuloCadastroModal {
  modulo: Modulo;
}

@Component({
  selector: 'help-bot-modulo-cadastro-modal',
  templateUrl: './modulo-cadastro-modal.component.html'
})
export class ModuloCadastroModalComponent
extends ModalSuperComponent<IModuloCadastroModal, void>
implements IModuloCadastroModal {

  public modulo: Modulo;
  
  public quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction
      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [
        { color: [] },
        { background: [] }
      ], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ['clean'] // remove formatting button
      // [] // link and image, video
    ]
  };

  constructor(
    public modalService: ModalService,
    private moduleService: AModuleService
  ) {
    super(modalService);
  }

  public cancelar() {
    this.modalService.fecharModal(this);
  }

  public salvar(): void {
    let acao: Observable<Modulo>;

    if (this.modulo.id) {
      acao = this.moduleService.put(this.modulo);
    } else {
      acao = this.moduleService.post(this.modulo);
    }

    acao.subscribe(() => this.modalService.fecharModal(this));
  }

}
