import { Routes } from '@angular/router';


import { FuncionalidadesVisualizacaoComponent } from './visualizacao/funcionalidades-visualizacao.component';
import { FuncionalidadesCadastroComponent } from './cadastro/funcionalidades-cadastro.component';

export const funcionalidadesRoute: Routes = [
  { path: 'funcionalidades-visualizacao', component: FuncionalidadesVisualizacaoComponent},
  { path: 'funcionalidades-cadastro', component: FuncionalidadesCadastroComponent},
];
