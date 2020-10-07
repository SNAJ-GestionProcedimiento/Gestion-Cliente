import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuxiliarHomeComponent } from './components/auxiliar-home/auxiliar-home.component';
import { AuxiliarNavbarComponent } from './components/auxiliar-navbar/auxiliar-navbar.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuxiliarHomeComponent,
    AuxiliarNavbarComponent,
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
