import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatDividerModule, MatInputModule, MatListModule } from '@angular/material';

import { PesquisaTutorialComponent } from './pesquisa-tutorial.component';
import { PageModule } from '../../components/page/page.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    PageModule,
    FontAwesomeModule
  ],
  exports: [],
  declarations: [
    PesquisaTutorialComponent
  ],
  providers: [],
})
export class PesquisaTutorialModule { }
