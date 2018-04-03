import { Component } from '@angular/core';
import { ACampoService } from '../../../services-abstract/campo.service';

@Component({
  selector: 'help-bot-campo-visualizacao',
  templateUrl: './campo-visualizacao.component.html'
})
export class CampoVisualizacaoComponent {

  constructor(
    private campoService: ACampoService
  ) { }

}
