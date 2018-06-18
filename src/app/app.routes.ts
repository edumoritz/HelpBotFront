import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { LoginComponent } from './_login/login.component';
import { campoRoute } from './features/campo/campo.routing';
import { moduloRoute } from './features/modulo/modulo.routing';
import { regraCampoRoute } from './features/regra-campo/regra-campo.routing';
import { funcionalidadesRoute } from './features/funcionalidade/funcionalidade.routing';
import { demoRoute } from './demo/demo.routing';
import { tutorialRoute } from './features/tutorial/tutorial.routing';

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
      ...tutorialRoute
    ]
  },
  { path: '**', redirectTo: '/home' }
];
