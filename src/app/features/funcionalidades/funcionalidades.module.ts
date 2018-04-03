import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FuncionalidadesVisualizacaoComponent } from './visualizacao/funcionalidades-visualizacao.component';
import { FuncionalidadesCadastroComponent } from './cadastro/funcionalidades-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FuncionalidadesVisualizacaoComponent,
    FuncionalidadesCadastroComponent
  ]
})
export class FuncionalidadesModule { }
