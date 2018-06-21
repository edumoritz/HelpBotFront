import { Routes } from '@angular/router';

import { TutorialVisualizacaoComponent } from './visualizacao/tutorial-visualizacao.component';
import { TutorialCadastroComponent } from './cadastro/tutorial-cadastro.component';

export const tutorialRoute: Routes = [
  { path: 'tutorial-visualizacao', component: TutorialVisualizacaoComponent },
  { path: 'tutorial-cadastro/:id', component: TutorialCadastroComponent }
];
