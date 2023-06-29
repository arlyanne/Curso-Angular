import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirtsComponentComponent } from './components/firts-component/firts-component.component';
import { FirtsComponent1Component } from './components/firts-component1/firts-component1.component';

@NgModule({
  declarations: [
    AppComponent,
    FirtsComponentComponent,
    FirtsComponent1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
