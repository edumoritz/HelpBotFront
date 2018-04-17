import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TypeProvider } from '@angular/core';
import { ValueProvider } from '@angular/core';
import { ClassProvider } from '@angular/core';
import { ExistingProvider } from '@angular/core';
import { FactoryProvider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { LoginModule } from './_login/login.module';
import { CoreModule } from './core/core.module';

import { AuthInterceptor } from './interceptor/auth-interceptor';

import { providersServices } from './services-providers/service-provider.factory';
import { FeaturesModule } from './features/features.module';

import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginModule.foorRoot(),
    RouterModule.forRoot(APP_ROUTES),
    CoreModule.forRoot(),
    HomeModule,
    FeaturesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },

    providersServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
