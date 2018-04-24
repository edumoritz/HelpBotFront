import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FuncionalidadeVisualizacaoComponent } from './visualizacao/funcionalidade-visualizacao.component';
import { FuncionalidadeCadastroComponent } from './cadastro/funcionalidade-cadastro.component';

import { PageModule } from '../../components/page/page.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FuncionalidadeCadastroModalComponent } from './cadastro/funcionalidade-cadastro-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageModule,
    FontAwesomeModule
  ],
  declarations: [
    FuncionalidadeVisualizacaoComponent,
    FuncionalidadeCadastroComponent,
    FuncionalidadeCadastroModalComponent
  ],
  entryComponents: [
    FuncionalidadeCadastroModalComponent
  ]
})
export class FuncionalidadesModule { }
