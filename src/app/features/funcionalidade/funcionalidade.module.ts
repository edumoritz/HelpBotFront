import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FuncionalidadeVisualizacaoComponent } from './visualizacao/funcionalidade-visualizacao.component';
import { FuncionalidadeCadastroComponent } from './cadastro/funcionalidade-cadastro.component';

import { PageModule } from '../../components/page/page.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FuncionalidadeCadastroModalComponent } from './cadastro/funcionalidade-cadastro-modal.component';
import { ModalModule } from '../../components/modal/modal.module';
import { MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatTableModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageModule,
    FontAwesomeModule,
    ModalModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatTableModule,
    PaginationModule,
    MatButtonModule
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
