import { TypeProvider } from '@angular/core';
import { ValueProvider } from '@angular/core';
import { ClassProvider } from '@angular/core';
import { ExistingProvider } from '@angular/core';
import { FactoryProvider } from '@angular/core';

// Modulo Service
import { AModuleService } from '../services-abstract/module.service';
import { ModuleTestService } from '../test/service/module-test.service';
import { ModuleService } from '../services/module.service';

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
  { provide: AModuleService, useClass: getService(ModuleTestService, ModuleService) }
];
