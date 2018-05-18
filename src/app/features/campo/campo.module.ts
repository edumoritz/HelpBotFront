import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CampoCadastroModalComponent } from './cadastro/campo-cadastro-modal.component';
import { CampoVisualizacaoComponent } from './visualizacao/campo-visualizacao.component';
import { CampoCadastroComponent } from './cadastro/campo-cadastro.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PageModule } from '../../components/page/page.module';
import { ModalModule } from '../../components/modal/modal.module';

import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageModule,
    FontAwesomeModule,
    ModalModule,
    MatButtonModule,
    MatTableModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    PaginationModule,
    BrowserAnimationsModule
  ],
  declarations: [
    CampoVisualizacaoComponent,
    CampoCadastroComponent,
    CampoCadastroModalComponent
  ],
  entryComponents: [
    CampoCadastroModalComponent
  ]
})
export class CampoModule { }
