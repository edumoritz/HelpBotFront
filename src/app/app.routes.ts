import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { LoginComponent } from './_login/login.component';
import { campoRoute } from './features/campo/campo.routing';
import { moduloRoute } from './features/modulo/modulo.routing';
import { regraCampoRoute } from './features/regra-campo/regra-campo.routing';
import { funcionalidadesRoute } from './features/funcionalidade/funcionalidade.routing';

export const APP_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    children: [
      ...campoRoute,
      ...moduloRoute,
      ...funcionalidadesRoute,
      ...regraCampoRoute
    ]
  },
  { path: '**', redirectTo: '/login' }
];
