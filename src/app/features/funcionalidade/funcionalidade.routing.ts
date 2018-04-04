import { Routes } from '@angular/router';


import { FuncionalidadeVisualizacaoComponent } from './visualizacao/funcionalidade-visualizacao.component';
import { FuncionalidadeCadastroComponent } from './cadastro/funcionalidade-cadastro.component';

export const funcionalidadesRoute: Routes = [
  { path: 'funcionalidade-visualizacao', component: FuncionalidadeVisualizacaoComponent},
  { path: 'funcionalidade-cadastro/:id', component: FuncionalidadeCadastroComponent}
];
