import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FuncionalidadesVisualizacaoComponent } from './visualizacao/funcionalidades-visualizacao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FuncionalidadesVisualizacaoComponent
  ]
})
export class FuncionalidadesModule { }
