import { Component } from '@angular/core';
import { AModuleService } from '../../../services-abstract/module.service';

@Component({
  selector: 'help-bot-modulo-visualizacao',
  templateUrl: './modulo-visualizacao.component.html'
})
export class ModuloVisualizacaoComponent {

  constructor(
    private moduleService: AModuleService
  ) { }

}
