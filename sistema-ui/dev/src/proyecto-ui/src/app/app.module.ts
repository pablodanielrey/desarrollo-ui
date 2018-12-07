import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,  
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatMenuModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatExpansionModule
  } from '@angular/material';


  
import { InicioComponent } from './sistema/inicio/inicio.component';
import { SistemaComponent } from './sistema/sistema.component';
import { GuiaComponent } from './sistema/guia/guia.component';
import { IdentidadComponent } from './sistema/guia/identidad/identidad.component';






@NgModule({
  declarations: [
    AppComponent,
    SistemaComponent,
    InicioComponent,
    GuiaComponent,
    IdentidadComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatMenuModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
