import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioPagamentoRoutingModule } from './calendario-pagamento-routing.module';
import { CalendarioPagamentoComponent } from './calendario-pagamento.component';


@NgModule({
  declarations: [
    CalendarioPagamentoComponent
  ],
  imports: [
    CommonModule,
    CalendarioPagamentoRoutingModule
  ]
})
export class CalendarioPagamentoModule { }
