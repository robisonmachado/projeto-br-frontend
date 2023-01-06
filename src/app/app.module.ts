import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IframeContrachequeModule } from './pages/iframe-contracheque/iframe-contracheque.module';
import { CustomPipesModule } from './pipes/custom-pipes.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomPipesModule,
    IframeContrachequeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
