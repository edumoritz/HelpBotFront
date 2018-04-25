import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { demoRoute } from './demo/demo.routing';
import { DemoModule } from './demo/demo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoginModule,
    RouterModule.forRoot(APP_ROUTES),
    CoreModule.forRoot(),
    HomeModule,
    FeaturesModule,
    DemoModule
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
