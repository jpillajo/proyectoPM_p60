import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosPuestoAdopcionMascotaPageRoutingModule } from './datos-puesto-adopcion-mascota-routing.module';

import { DatosPuestoAdopcionMascotaPage } from './datos-puesto-adopcion-mascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosPuestoAdopcionMascotaPageRoutingModule
  ],
  declarations: [DatosPuestoAdopcionMascotaPage]
})
export class DatosPuestoAdopcionMascotaPageModule {}
