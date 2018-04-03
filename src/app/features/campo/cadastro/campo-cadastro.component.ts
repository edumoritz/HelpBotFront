import { Component } from '@angular/core';
import { ACampoService } from '../../../services-abstract/campo.service';

@Component({
  selector: 'help-bot-campo-cadastro',
  templateUrl: './campo-cadastro.component.html'
})
export class CampoCadastroComponent {

  constructor(
    private campoService: ACampoService
  ) { }

}
