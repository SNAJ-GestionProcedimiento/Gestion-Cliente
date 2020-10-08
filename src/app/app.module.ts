import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuxiliarHomeComponent } from './components/auxiliar-home/auxiliar-home.component';
import { AuxiliarNavbarComponent } from './components/auxiliar-navbar/auxiliar-navbar.component';
import { AuxiliarDocumentacionComponent } from './components/auxiliar-documentacion/auxiliar-documentacion.component';
import { AuxiliarMaterialesComponent } from './components/auxiliar-materiales/auxiliar-materiales.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuxiliarHomeComponent,
    AuxiliarNavbarComponent,
    AuxiliarDocumentacionComponent,
    AuxiliarMaterialesComponent,
    PacienteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
