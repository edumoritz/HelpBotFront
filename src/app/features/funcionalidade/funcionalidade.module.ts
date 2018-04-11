import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FuncionalidadeVisualizacaoComponent } from './visualizacao/funcionalidade-visualizacao.component';
import { FuncionalidadeCadastroComponent } from './cadastro/funcionalidade-cadastro.component';
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
    FuncionalidadeVisualizacaoComponent,
    FuncionalidadeCadastroComponent
  ]
})
export class FuncionalidadesModule { }
