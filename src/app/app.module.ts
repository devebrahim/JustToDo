import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ ReactiveFormsModule } from '@angular/forms';  
import { AppComponent } from './app.component';
import * as $ from "jquery";

@NgModule({
  declarations: [ 
    AppComponent
  ],
  imports: [ 
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
