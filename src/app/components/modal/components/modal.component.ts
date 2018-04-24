import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';

import { IConfiguracaoModal } from './configuracao/configuracao-modal';
import { ModalService } from '../modal.service';

@Component({
  selector: 'help-bot-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent /* implements OnInit*/ {

  // constructor(
  //   private modalService: ModalService
  // ) { }

  // public ngOnInit(): void {
  //   this.modalService.addModal<void, void>().subscribe(() => {
  //     console.log('Fechou');
  //   });
  // }

}
