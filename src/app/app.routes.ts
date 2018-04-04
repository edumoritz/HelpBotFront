import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { LoginComponent } from './_login/login.component';
import { campoRoute } from './features/campo/campo.routing';
import { moduloRoute } from './features/modulo/modulo.routing';

export const APP_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    children: [
      ...campoRoute,
      ...moduloRoute
    ]
  },
  { path: '**', redirectTo: '/login' }
];
