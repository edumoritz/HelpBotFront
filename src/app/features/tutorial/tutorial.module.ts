import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { ModalModule } from '../../components/modal/modal.module';
import { PageModule } from '../../components/page/page.module';
import { TutorialCadastroComponent } from './cadastro/tutorial-cadastro.component';
import { TutorialVisualizacaoComponent } from './visualizacao/tutorial-visualizacao.component';
import { QuillModule } from 'ngx-quill';

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
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    FontAwesomeModule,
    MatTooltipModule,
    QuillModule
  ],
  declarations: [
    TutorialVisualizacaoComponent,
    TutorialCadastroComponent
  ],
  entryComponents: [
  ]
})
export class TutorialModule { }
