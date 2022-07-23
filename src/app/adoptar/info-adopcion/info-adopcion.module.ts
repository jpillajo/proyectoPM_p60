import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoAdopcionPageRoutingModule } from './info-adopcion-routing.module';

import { InfoAdopcionPage } from './info-adopcion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoAdopcionPageRoutingModule
  ],
  declarations: [InfoAdopcionPage]
})
export class InfoAdopcionPageModule {}
