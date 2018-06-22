import { Routes } from '@angular/router';

import { TutorialVisualizacaoComponent } from './visualizacao/tutorial-visualizacao.component';
import { TutorialCadastroComponent } from './cadastro/tutorial-cadastro.component';
import { TutorialComponent } from './visualizacao/tutorial.component';

export const tutorialRoute: Routes = [
  { path: 'tutorial-visualizacao', component: TutorialVisualizacaoComponent },
  { path: 'tutorial-cadastro/:id', component: TutorialCadastroComponent },
  { path: 'tutorial/:id', component: TutorialComponent },
];
