import { Directive } from '@angular/core';
import { Input } from '@angular/core';
import { Host } from '@angular/core';

import { FormValidatorDirective } from './form-validator.directive';

// TODO: Tenque fazer mesmo.
@Directive({
  selector: '[HelpFormFieldValidator]'
})
export class FormFieldValidatorDirective {

  @Input() public requerido: boolean;

  @Input() public validacao: (value: string) => boolean;

  @Input() public field: string;

  constructor(
    @Host() public form: FormValidatorDirective
  ) {
    this.form.register(this.field, this.requerido, this.validacao);
  }

}