import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './data/calculator/calculator.component';
import { ButtonComponent } from './data/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
