import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

import { PaginationModule } from 'ngx-bootstrap/pagination';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuillModule } from 'ngx-quill';

import { ModuloCadastroModalComponent } from './cadastro/modulo-cadastro-modal.component';
import { ModuloVisualizacaoComponent } from './visualizacao/modulo-visualizacao.component';
import { PageModule } from '../../components/page/page.module';
import { ModalModule } from '../../components/modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageModule,
    FontAwesomeModule,
    ModalModule,
    MatTableModule,
    MatButtonModule,
    MatAutocompleteModule,
    PaginationModule,
    MatInputModule,
    QuillModule
  ],
  declarations: [
    ModuloVisualizacaoComponent,
    ModuloCadastroModalComponent
  ],
  entryComponents: [
    ModuloCadastroModalComponent
  ]
})
export class ModuloModule { }
