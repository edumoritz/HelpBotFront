import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoVisualizacaoComponent } from './visualizacao/demo-visualizacao.component';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageModule } from '../components/page/page.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    PageModule,
    MatCardModule
  ],
  declarations: [
    DemoVisualizacaoComponent
  ]
})
export class DemoModule { }
