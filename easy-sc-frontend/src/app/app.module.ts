import { HttpIntercaptorComponent } from './esc-common/http-intercaptor/http-intercaptor.component';
import { EscCommonModule } from './esc-common/esc-common.module';
import { PortalModule } from './portal/portal.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import { LoginComponent } from './portal/component/login.component';
import { UnauthenticatedHomeComponent } from './portal/component/unauthenticated-home.component';
import { AuthenticatedHomeComponent } from './portal/component/authenticated-home.component';

@NgModule({
  imports: [
    BrowserModule,
    PortalModule,
    EscCommonModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpIntercaptorComponent,
    multi: true
  }],
  bootstrap: [UnauthenticatedHomeComponent]
})
export class AppModule { }
