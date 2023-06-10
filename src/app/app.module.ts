import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FijaComponent } from './fija/fija.component';

import { DivisorComponent } from './divisor/divisor.component';

import { RealimentacionComponent } from './realimentacion/realimentacion.component';
import { EmisorComponent } from './emisor/emisor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FijaComponent,
    DivisorComponent,
    RealimentacionComponent,
    EmisorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
