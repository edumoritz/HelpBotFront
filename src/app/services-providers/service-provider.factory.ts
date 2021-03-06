import { TypeProvider } from '@angular/core';
import { ValueProvider } from '@angular/core';
import { ClassProvider } from '@angular/core';
import { ExistingProvider } from '@angular/core';
import { FactoryProvider } from '@angular/core';

// Modulo Service
import { ModuleTestService } from '../test/service/module-test.service';
import { ModuleService } from '../services/module.service';
import { AModuleService } from '../services-abstract/modulo.service';
import { ACampoService } from '../services-abstract/campo.service';
import { CampoTestService } from '../test/service/campo-test.service';
import { CampoService } from '../services/campo.service';
import { ARegraCampoService } from '../services-abstract/regra-campo.service';
import { RegraCampoTestService } from '../test/service/regra-campo-test.service';
import { RegraCampoService } from '../services/regra-campo.service';
import { FuncionalidadeService } from '../services/funcionalidade.service';
import { FuncionalidadeTestService } from '../test/service/funcionalidade-test.service';
import { AFuncionalidadeService } from '../services-abstract/funcionalidade.service';
import { ATutorialService } from '../services-abstract/tutorial.service';
import { TutorialService } from '../services/tutorial.service';
import { TutorialTestService } from '../test/service/tutorial-test.service';
import { APerguntaFrequenteService } from '../services-abstract/pergunta-frequente.service';
import { PerguntaFrequenteTestService } from '../test/service/pergunta-frequente-test.service';
import { PerguntaFrequenteService } from '../services/pergunta-frequente.service';
import { MenuTestService } from '../test/service/menu-test.service';
import { MenuService } from '../services/menu.service';
import { AMenuService } from '../services-abstract/menu.service';

const SERVER_MODE = true;

type ProviderType = TypeProvider |
ValueProvider |
ClassProvider |
ExistingProvider |
FactoryProvider;

function getService(testService: ProviderType, serverService: ProviderType): any {
  if (SERVER_MODE) {
    return serverService;
  } else {
    return testService;
  }
}

export const providersServices: ProviderType[] = [
  { provide: AModuleService, useClass: getService(ModuleTestService, ModuleService) },
  { provide: ACampoService, useClass: getService(CampoTestService, CampoService) },
  { provide: ARegraCampoService, useClass: getService(RegraCampoTestService, RegraCampoService) },
  { provide: AFuncionalidadeService, useClass: getService(FuncionalidadeTestService, FuncionalidadeService) },
  { provide: ATutorialService, useClass: getService(TutorialTestService, TutorialService) },
  { provide: APerguntaFrequenteService, useClass: getService(PerguntaFrequenteTestService, PerguntaFrequenteService) },
  { provide: AMenuService, useClass: getService(MenuTestService, MenuService) }
];
