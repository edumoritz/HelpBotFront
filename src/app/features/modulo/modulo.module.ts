import { ModalModule } from '../../components/modal/modal.module';
import { ModuloCadastroModalComponent } from './cadastro/modulo-cadastro-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModuloVisualizacaoComponent } from './visualizacao/modulo-visualizacao.component';
import { ModuloCadastroComponent } from './cadastro/modulo-cadastro.component';

import { PageModule } from '../../components/page/page.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageModule,
    FontAwesomeModule,
    ModalModule
  ],
  declarations: [
    ModuloVisualizacaoComponent,
    ModuloCadastroComponent,
    ModuloCadastroModalComponent
  ],
  entryComponents: [
    ModuloCadastroModalComponent
  ]
})
export class ModuloModule { }
