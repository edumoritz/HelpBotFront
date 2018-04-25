import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoVisualizacaoComponent } from './visualizacao/demo-visualizacao.component';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageModule } from '../components/page/page.module';

import { FlexModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    PageModule,
    MatCardModule,
    FlexModule,
    MatDividerModule
  ],
  declarations: [
    DemoVisualizacaoComponent
  ]
})
export class DemoModule { }
