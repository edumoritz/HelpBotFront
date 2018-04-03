import { Routes } from '@angular/router';

import { Funcionalidadesomponent } from './main/funcionalidades.component';

export const funcionalidadesRoute: Routes = [
  { path: 'modulo-visualizacao', component: FuncionalidadesComponent },
  { path: 'modulo-cadastro', component: FuncionalidadesComponent },
];
