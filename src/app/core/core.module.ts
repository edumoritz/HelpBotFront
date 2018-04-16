import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';

import { LoginEventService } from './login-event.service';
import { TokenService } from './token.service';
import { UserControllerService } from './user-controller.service';

import { FormValidatorDirective } from './form-validator.directive';
import { FormFieldValidatorDirective } from './form-field-validator.directive';

import { ExclusaoComponent } from './exclusao.component';
import { ExclusaoService } from './exclusao.service';

@NgModule({
  imports: [
  ],
  declarations: [
    FormValidatorDirective,
    FormFieldValidatorDirective,
    ExclusaoComponent
  ],
  entryComponents: [
    ExclusaoComponent
  ],
  exports: [
    FormValidatorDirective,
    FormFieldValidatorDirective
  ]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        TokenService,
        LoginEventService,
        UserControllerService,
        ExclusaoService,
      ]
    };
  }
}
