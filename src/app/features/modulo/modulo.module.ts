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
    FontAwesomeModule
  ],
  declarations: [
    ModuloVisualizacaoComponent,
    ModuloCadastroComponent
  ]
})
export class ModuloModule { }
