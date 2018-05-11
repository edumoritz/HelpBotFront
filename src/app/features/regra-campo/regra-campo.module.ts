import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegraCampoVisualizacaoComponent } from './visualizacao/regra-campo-visualizacao.component';

import { PageModule } from '../../components/page/page.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegraCampoCadastroComponent } from './cadastro/regra-campo-cadastro.component';
import { MatPaginatorModule, MatTableModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule } from '@angular/material';
import { ModalModule } from '../../components/modal/modal.module';
import { RegraCampoCadastroModalComponent } from './cadastro/regra-campo-cadastro-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageModule,
    FontAwesomeModule,
    ModalModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
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
