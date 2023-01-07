import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { CalendarioPagamentoComponent } from './pages/calendario-pagamento/calendario-pagamento.component';
import { CiaComponent } from './pages/cia/cia.component';
import { CrafComponent } from './pages/craf/craf.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FuncionalComponent } from './pages/funcional/funcional.component';
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
    path: 'funcional',
    component: FuncionalComponent
  },
  {
    path: 'craf',
    component: CrafComponent
  },
  {
    path: 'cia',
    component: CiaComponent
  },
  {
    path: 'calendario-pagamento',
    component: CalendarioPagamentoComponent
  },
  {
    path: 'agenda',
    component: AgendaComponent
  },
  {
    path: 'contracheque',
    component: IframeContrachequeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
