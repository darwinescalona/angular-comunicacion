import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// NGRX
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { contadorReducer } from './contador/contador.reducer';
import { NietoComponent } from './contador/nieto/nieto.component';
import { PadreComponent } from './contador/padre/padre.component';
import { HijoComponent } from './contador/hijo/hijo.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    StoreModule.forRoot({cont: contadorReducer})
    ],
  declarations: [ AppComponent, HelloComponent, HijoComponent, PadreComponent, NietoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
