import { NgModule } from '@angular/core';
import { ModuloModule } from './modulo/modulo.module';
import { CampoModule } from './campo/campo.module';

@NgModule({
  imports: [
    CampoModule,
    ModuloModule
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class FeaturesModule { }
