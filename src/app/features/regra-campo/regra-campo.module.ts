import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegraCampoVisualizacaoComponent } from './visualizacao/regra-campo-visualizacao.component';
import { RegraCampoCadastroComponent } from './cadastro/regra-campo-cadastro.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PageModule } from '../../components/page/page.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    RegraCampoVisualizacaoComponent,
    RegraCampoCadastroComponent
  ]
})
export class RegraCampoModule { }
