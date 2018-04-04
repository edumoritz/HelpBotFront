import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { LoginComponent } from './_login/login.component';
import { campoRoute } from './features/campo/campo.routing';

export const APP_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    children: [
      ...campoRoute
    ]
  },
  ...campoRoute,
  { path: "**", redirectTo: "/login" }
];