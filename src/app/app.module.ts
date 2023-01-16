import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaFacultativoComponent } from './components/pages/tabla-facultativo/tabla-facultativo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FiltroComponent } from './components/component/filtro/filtro.component';
import { TablaEndosoComponent } from './components/pages/tabla-endoso/tabla-endoso.component';
import { TablaCertificadoComponent } from './components/pages/tabla-certificado/tabla-certificado.component';



@NgModule({
  declarations: [
    AppComponent,
    TablaFacultativoComponent,
    FiltroComponent,
    TablaEndosoComponent,
    TablaCertificadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
