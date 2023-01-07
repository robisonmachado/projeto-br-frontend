import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrafRoutingModule } from './craf-routing.module';
import { CrafComponent } from './craf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    CrafComponent
  ],
  imports: [
    CommonModule,
    CrafRoutingModule,
    PdfViewerModule,
  ]
})
export class CrafModule { }
