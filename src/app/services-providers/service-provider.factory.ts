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

const SERVER_MODE = false;

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
  { provide: ACampoService, useClass: getService(CampoTestService, CampoService) }
];
