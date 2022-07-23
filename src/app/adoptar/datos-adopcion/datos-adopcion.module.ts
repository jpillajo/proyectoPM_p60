import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosAdopcionPageRoutingModule } from './datos-adopcion-routing.module';

import { DatosAdopcionPage } from './datos-adopcion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosAdopcionPageRoutingModule
  ],
  declarations: [DatosAdopcionPage]
})
export class DatosAdopcionPageModule {}
