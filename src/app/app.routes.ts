import { Routes } from '@angular/router';

import { LoginComponent } from './_login/login.component';
import { demoRoute } from './demo/demo.routing';
import { campoRoute } from './features/campo/campo.routing';
import { funcionalidadesRoute } from './features/funcionalidade/funcionalidade.routing';
import { moduloRoute } from './features/modulo/modulo.routing';
import { regraCampoRoute } from './features/regra-campo/regra-campo.routing';
import { tutorialRoute } from './features/tutorial/tutorial.routing';
import { HomeComponent } from './home/home.component';
import { pesquisaPerguntasRoute } from './features/pesquisa-perguntas/pesquisa-perguntas.routing';
import { perguntaFrequenteRoute } from './features/pergunta-frequente/pergunta-frequente.routing';

export const APP_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      ...campoRoute,
      ...moduloRoute,
      ...funcionalidadesRoute,
      ...regraCampoRoute,
      ...demoRoute,
      ...tutorialRoute,
      ...pesquisaPerguntasRoute,
      ...perguntaFrequenteRoute
    ]
  },
  { path: '**', redirectTo: '/home' }
];
