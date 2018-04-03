import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CampoCadastroComponent } from './cadastro/campo-cadastro.component';
import { CampoVisualizacaoComponent } from './visualizacao/campo-visualizacao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CampoVisualizacaoComponent,
    CampoCadastroComponent
  ]
})
export class CampoModule { }
