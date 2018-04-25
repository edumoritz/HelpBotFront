import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CampoCadastroComponent } from './cadastro/campo-cadastro.component';
import { CampoVisualizacaoComponent } from './visualizacao/campo-visualizacao.component';
import { PageModule } from '../../components/page/page.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from '../../components/modal/modal.module';
import { CampoCadastroModalComponent } from './cadastro/campo-cadastro-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageModule,
    FontAwesomeModule,
    ModalModule
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
