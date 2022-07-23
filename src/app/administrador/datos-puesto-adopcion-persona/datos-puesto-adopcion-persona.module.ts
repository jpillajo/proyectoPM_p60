import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosPuestoAdopcionPersonaPageRoutingModule } from './datos-puesto-adopcion-persona-routing.module';

import { DatosPuestoAdopcionPersonaPage } from './datos-puesto-adopcion-persona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosPuestoAdopcionPersonaPageRoutingModule
  ],
  declarations: [DatosPuestoAdopcionPersonaPage]
})
export class DatosPuestoAdopcionPersonaPageModule {}
