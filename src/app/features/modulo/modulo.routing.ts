import { Routes } from '@angular/router';
import { ModuloVisualizacaoComponent } from './visualizacao/modulo-visualizacao.component';
import { ModuloCadastroComponent } from './cadastro/modulo-cadastro.component';

export const moduloRoute: Routes = [
  { path: 'modulo-visualizacao', component: ModuloVisualizacaoComponent },
  { path: 'modulo-cadastro/:id', component: ModuloCadastroComponent }
];
