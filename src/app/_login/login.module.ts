import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { LoginService } from './login.service';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    FormsModule
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
