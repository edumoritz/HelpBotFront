import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpcoesComponent } from './opcoes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  exports: [OpcoesComponent],
  declarations: [OpcoesComponent],
  providers: [],
})
export class OpcoesModule { }
