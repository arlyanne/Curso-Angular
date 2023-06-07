import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirtsComponentComponent } from './component/firts-component/firts-component.component';
import { ParentDataComponent } from './component/parent-data/parent-data.component';

@NgModule({
  declarations: [
    AppComponent,
    FirtsComponentComponent,
    ParentDataComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
