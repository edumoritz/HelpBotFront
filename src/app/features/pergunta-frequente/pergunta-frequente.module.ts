import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageModule } from '../../components/page/page.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule, MatInputModule, MatTooltipModule, MatChipsModule } from '@angular/material';
import { MatButtonModule, MatAutocompleteModule } from '@angular/material';
import { ModalModule } from '../../components/modal/modal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PerguntaFrequenteVisualizacaoComponent } from './visualizacao/pergunta-frequente-visualizacao.component';
import { PerguntaFrequenteCadastroModalComponent } from './cadastro/pergunta-frequente-cadastro-modal.component';

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
    MatTooltipModule,
    MatChipsModule
  ],
  declarations: [
    PerguntaFrequenteVisualizacaoComponent,
    PerguntaFrequenteCadastroModalComponent
  ],
  entryComponents: [
    PerguntaFrequenteCadastroModalComponent
  ]
})
export class PerguntaFrequenteModule { }
