import { ModuleService } from './../module.service';
import { Component } from '@angular/core';

@Component({
  selector: 'help-bot-module',
  templateUrl: 'module.component.html'
})
export class ModuleComponent {

  constructor(
    private moduleService: ModuleService
  ) { }

}
