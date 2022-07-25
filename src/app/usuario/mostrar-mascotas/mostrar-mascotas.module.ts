import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarMascotasPageRoutingModule } from './mostrar-mascotas-routing.module';

import { MostrarMascotasPage } from './mostrar-mascotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarMascotasPageRoutingModule
  ],
  declarations: [MostrarMascotasPage]
})
export class MostrarMascotasPageModule {}
