import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CampoCadastroComponent } from './cadastro/campo-cadastro.component';
import { CampoVisualizacaoComponent } from './visualizacao/campo-visualizacao.component';
import { PageModule } from '../../components/page/page.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from '../../components/modal/modal.module';
import { CampoCadastroModalComponent } from './cadastro/campo-cadastro-modal.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageModule,
    FontAwesomeModule,
    ModalModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule
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
