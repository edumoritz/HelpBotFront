import { Component } from '@angular/core';
import { AModuleService } from '../../../services-abstract/modulo.service';

@Component({
  selector: 'help-bot-modulo-cadastro',
  templateUrl: './modulo-cadastro.component.html'
})
export class ModuloCadastroComponent {

  constructor(
    private moduleService: AModuleService
  ) { }

}
