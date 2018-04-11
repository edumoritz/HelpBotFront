import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CampoCadastroComponent } from './cadastro/campo-cadastro.component';
import { CampoVisualizacaoComponent } from './visualizacao/campo-visualizacao.component';
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
    CampoVisualizacaoComponent,
    CampoCadastroComponent
  ]
})
export class CampoModule { }
