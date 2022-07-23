import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosAdopcionesPageRoutingModule } from './datos-adopciones-routing.module';

import { DatosAdopcionesPage } from './datos-adopciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosAdopcionesPageRoutingModule
  ],
  declarations: [DatosAdopcionesPage]
})
export class DatosAdopcionesPageModule {}
