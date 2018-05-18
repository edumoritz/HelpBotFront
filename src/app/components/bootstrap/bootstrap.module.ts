import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PaginationConfig } from 'ngx-bootstrap/pagination';

@NgModule()
export class BootStrapModule {
  public static forRoot(): ModuleWithProviders[] {
    return [
      PaginationModule.forRoot()
    ];
  }

  constructor(
    private paginationConfig: PaginationConfig
  ) {
    console.log(this.paginationConfig);
  }
}
