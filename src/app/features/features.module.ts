import { NgModule } from '@angular/core';
import { ModuloModule } from './modulo/modulo.module';
import { CampoModule } from './campo/campo.module';
import { FuncionalidadesModule } from './funcionalidade/funcionalidade.module';
import { RegraCampoModule } from './regra-campo/regra-campo.module';

@NgModule({
  imports: [
    CampoModule,
    ModuloModule,
    FuncionalidadesModule,
    RegraCampoModule
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class FeaturesModule { }
