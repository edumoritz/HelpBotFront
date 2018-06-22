import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatListModule, MatTooltipModule, MatDividerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { ModalModule } from '../../components/modal/modal.module';
import { PageModule } from '../../components/page/page.module';
import { PesquisaPerguntaVisualizacaoComponent } from './visualizacao/pesquisa-perguntas-visualizacao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageModule,
    FontAwesomeModule,
    ModalModule,
    MatInputModule,
    MatButtonModule,
    PaginationModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatListModule,
    MatDividerModule
  ],
  declarations: [
    PesquisaPerguntaVisualizacaoComponent
  ],
  entryComponents: [
  ]
})
export class PesquisaPerguntaModule { }
