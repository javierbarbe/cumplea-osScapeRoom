import { RelojComponent } from './componentes/reloj/reloj.component';
import { Prueba1Component } from './componentes/prueba1/prueba1.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppNavMenuComponent } from './componentes/app-nav-menu/app-nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    Prueba1Component,
    RelojComponent,
    AppNavMenuComponent

  ],
  imports: [CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
