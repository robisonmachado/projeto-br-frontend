import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IframeContrachequeRoutingModule } from './iframe-contracheque-routing.module';
import { IframeContrachequeComponent } from './iframe-contracheque.component';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';


@NgModule({
  declarations: [
    IframeContrachequeComponent,
  ],
  exports:[
    IframeContrachequeComponent,
  ],
  imports: [
    CommonModule,
    IframeContrachequeRoutingModule,
    CustomPipesModule,
  ],
  providers: [
  ]
})
export class IframeContrachequeModule { }
