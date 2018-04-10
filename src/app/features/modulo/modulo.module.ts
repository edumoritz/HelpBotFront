import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModuloVisualizacaoComponent } from './visualizacao/modulo-visualizacao.component';
import { ModuloCadastroComponent } from './cadastro/modulo-cadastro.component';

import { PageModule } from '../../components/page/page.module';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    ModuloVisualizacaoComponent,
    ModuloCadastroComponent
  ]
})
export class ModuloModule { }
