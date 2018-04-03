import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModuloVisualizacaoComponent } from './visualizacao/modulo-visualizacao.component';
import { ModuloCadastroComponent } from './cadastro/modulo-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ModuloVisualizacaoComponent,
    ModuloCadastroComponent
  ]
})
export class ModuleModule { }
