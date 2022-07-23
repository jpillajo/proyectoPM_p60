import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmvioAdopcionPageRoutingModule } from './emvio-adopcion-routing.module';

import { EmvioAdopcionPage } from './emvio-adopcion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmvioAdopcionPageRoutingModule
  ],
  declarations: [EmvioAdopcionPage]
})
export class EmvioAdopcionPageModule {}
