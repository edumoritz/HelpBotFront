import { ModalService } from './modal.service';

export class ModalSuperComponent<Parametros, Resposta> {

  public idModal: number;

  constructor(
    public modalService: ModalService
  ) { }

  public fecharModal(): void {
    this.modalService.fecharModal(this);
  }

}
