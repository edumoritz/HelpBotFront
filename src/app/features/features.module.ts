import { NgModule } from '@angular/core';
import { ModuloModule } from './modulo/modulo.module';
import { CampoModule } from './campo/campo.module';
import { FuncionalidadesModule } from './funcionalidade/funcionalidade.module';
import { RegraCampoModule } from './regra-campo/regra-campo.module';
import { TutorialModule } from './tutorial/tutorial.module';
import { PesquisaPerguntaModule } from './pesquisa-perguntas/pesquisa-perguntas.module';

@NgModule({
  imports: [
    CampoModule,
    ModuloModule,
    FuncionalidadesModule,
    RegraCampoModule,
    TutorialModule,
    PesquisaPerguntaModule
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class FeaturesModule { }
