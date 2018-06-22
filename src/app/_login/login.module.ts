import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PageModule } from '../components/page/page.module';
import { LoginComponent } from './login.component';
import { MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    PageModule,
    FontAwesomeModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
