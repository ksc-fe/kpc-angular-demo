import { KpcBrowserModule, KpcModule } from 'kpc-angular';
import { NgModule } from '@angular/core';

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
  bootstrap: [AppComponent]
})
export class AppModule { }
