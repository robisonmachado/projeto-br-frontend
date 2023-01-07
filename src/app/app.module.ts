import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionalModule } from './pages/funcional/funcional.module';
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
    FuncionalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
