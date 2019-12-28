import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { NietoComponent } from './contador/nieto/nieto.component';
import { PadreComponent } from './contador/padre/padre.component';
import { HijoComponent } from './contador/hijo/hijo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HijoComponent, PadreComponent, NietoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
