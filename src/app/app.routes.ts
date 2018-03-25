import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_login/login.component';

export const APP_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];