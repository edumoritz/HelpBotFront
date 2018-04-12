import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { LoginService } from './login.service';
import { LoginComponent } from './login.component';
import { PageModule } from '../components/page/page.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    FormsModule,
    PageModule,
    FontAwesomeModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {

  public static foorRoot(): ModuleWithProviders {
    return {
      ngModule: LoginModule,
      providers: [
        LoginService
      ]
    };
  }

}
