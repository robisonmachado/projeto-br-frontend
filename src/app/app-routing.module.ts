import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IframeContrachequeComponent } from './pages/iframe-contracheque/iframe-contracheque.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginModule } from './pages/login/login.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'contracheque',
    component: IframeContrachequeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
