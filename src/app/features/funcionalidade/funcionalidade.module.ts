import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FuncionalidadeVisualizacaoComponent } from './visualizacao/funcionalidade-visualizacao.component';
import { FuncionalidadeCadastroComponent } from './cadastro/funcionalidade-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FuncionalidadeVisualizacaoComponent,
    FuncionalidadeCadastroComponent
  ]
})
export class FuncionalidadesModule { }
