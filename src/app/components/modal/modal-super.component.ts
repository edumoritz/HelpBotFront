import { ModalService } from './modal.service';

export class ModalSuperComponent<Parametros, Resposta> {

  public resposta: Resposta;

  public parametros: Parametros;

  constructor(
    public modalService: ModalService
  ) { }

  protected fecharModal(): void {
    this.modalService.fecharModal(this);
  }

}
