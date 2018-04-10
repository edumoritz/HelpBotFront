import { Routes } from '@angular/router';

import { RegraCampoCadastroComponent } from './cadastro/regra-campo-cadastro.component';
import { RegraCampoVisualizacaoComponent } from './visualizacao/regra-campo-visualizacao.component';

export const regraCampoRoute: Routes = [
  { path: 'regra-campo-visualizacao', component: RegraCampoVisualizacaoComponent },
  { path: 'regra-campo-cadastro/:id', component: RegraCampoCadastroComponent }
];
