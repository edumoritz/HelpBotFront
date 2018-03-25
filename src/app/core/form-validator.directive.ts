import { Directive } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

// TODO: Tenque fazer mesmo.
@Directive({
  selector: '[HelpFormValidator]'
})
export class FormValidatorDirective implements OnInit {

  @Input() public objeto: any;

  @Output() public validator = new EventEmitter<(field: string) => boolean>();

  private fields:
    Array<{ field: string, requerido: boolean, validacao: (value: string) => boolean }>
    = [];

  public ngOnInit(): void {
    this.validator.emit(this.validar);
  }

  public register(
    field: string, requerido: boolean, validacao: (value: string) => boolean
  ): void {
    if (field in this.objeto) {
      this.fields.push({
        field: field,
        requerido: requerido,
        validacao: validacao
      });
    } else {
      throw new Error('Form Error: Campo não existente no objeto');
    }
  }

  private validar(field: string): boolean {
    if (field in this.objeto) {
      const index = this.fields.findIndex((f) => f.field === field);
      if (index > -1) {
        const fieldValidator = this.fields[index];
        if (fieldValidator.requerido) {
          //
        }
      }

      return true;
    } else {
      throw new Error('Form Error: Campo não existente no objeto');
    }
  }

}