// import { KpcBrowserModule, KpcModule } from 'kpc-angular/';
import { KpcBrowserModule, KpcModule } from 'kpc-angular/@stylus'; // use `ksyun` theme
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    KpcBrowserModule,
    AppRoutingModule,
    KpcModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
