import { Routes } from '@angular/router';
import { CampoCadastroComponent } from './cadastro/campo-cadastro.component';
import { CampoVisualizacaoComponent } from './visualizacao/campo-visualizacao.component';

export const campoRoute: Routes = [
  { path: 'campo-visualizacao', component: CampoVisualizacaoComponent },
  { path: 'campo-cadastro/{id}', component: CampoCadastroComponent }
];
