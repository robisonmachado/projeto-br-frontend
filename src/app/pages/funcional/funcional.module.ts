import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionalRoutingModule } from './funcional-routing.module';
import { FuncionalComponent } from './funcional.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    FuncionalComponent
  ],
  imports: [
    CommonModule,
    FuncionalRoutingModule,
    PdfViewerModule,
  ]
})
export class FuncionalModule { }
