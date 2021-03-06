import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegraCampoVisualizacaoComponent } from './visualizacao/regra-campo-visualizacao.component';

import { PageModule } from '../../components/page/page.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegraCampoCadastroComponent } from './cadastro/regra-campo-cadastro.component';
import { MatTableModule, MatInputModule } from '@angular/material';
import { MatButtonModule, MatAutocompleteModule } from '@angular/material';
import { ModalModule } from '../../components/modal/modal.module';
import { RegraCampoCadastroModalComponent } from './cadastro/regra-campo-cadastro-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageModule,
    FontAwesomeModule,
    ModalModule,
    MatTableModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    PaginationModule,
    BrowserAnimationsModule
  ],
  declarations: [
    RegraCampoVisualizacaoComponent,
    RegraCampoCadastroComponent,
    RegraCampoCadastroModalComponent

  ],
  entryComponents: [
    RegraCampoCadastroModalComponent
  ]
})
export class RegraCampoModule { }
