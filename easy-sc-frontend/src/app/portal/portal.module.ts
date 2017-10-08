import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedHomeComponent } from './component/authenticated-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login.component';
import { UnauthenticatedHomeComponent } from './component/unauthenticated-home.component';

const appRoutes: Routes = [
  {
    path: 'public',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'home',
        component: UnauthenticatedHomeComponent
      }
    ]
  },
  {
    path: 'private',
    children: [
      {
        path: '',
        redirectTo: 'public/login',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: AuthenticatedHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { 
        enableTracing: true,
        useHash: true 
      }
    )
  ],
  declarations: [LoginComponent, UnauthenticatedHomeComponent, AuthenticatedHomeComponent],
  exports: [LoginComponent, UnauthenticatedHomeComponent, AuthenticatedHomeComponent]
})
export class PortalModule { }
