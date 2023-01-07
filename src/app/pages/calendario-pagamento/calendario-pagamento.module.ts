import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioPagamentoRoutingModule } from './calendario-pagamento-routing.module';
import { CalendarioPagamentoComponent } from './calendario-pagamento.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    CalendarioPagamentoComponent
  ],
  imports: [
    CommonModule,
    CalendarioPagamentoRoutingModule,
    PdfViewerModule,
  ]
})
export class CalendarioPagamentoModule { }
