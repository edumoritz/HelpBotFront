import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegraCampoVisualizacaoComponent } from './visualizacao/regra-campo-visualizacao.component';

import { PageModule } from '../../components/page/page.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegraCampoCadastroComponent } from './cadastro/regra-campo-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageModule,
    FontAwesomeModule

    

  ],
  declarations: [
    RegraCampoVisualizacaoComponent,
    RegraCampoCadastroComponent


  ],
  entryComponents: [

  ]
})
export class RegraCampoModule { }
