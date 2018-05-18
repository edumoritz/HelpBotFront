import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ModuloCadastroModalComponent } from './cadastro/modulo-cadastro-modal.component';
import { ModuloVisualizacaoComponent } from './visualizacao/modulo-visualizacao.component';
import { ModuloCadastroComponent } from './cadastro/modulo-cadastro.component';
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
    MatTableModule,
    MatButtonModule,
    MatAutocompleteModule,
    PaginationModule,
    MatInputModule
  ],
  declarations: [
    ModuloVisualizacaoComponent,
    ModuloCadastroComponent,
    ModuloCadastroModalComponent
  ],
  entryComponents: [
    ModuloCadastroModalComponent
  ]
})
export class ModuloModule { }
