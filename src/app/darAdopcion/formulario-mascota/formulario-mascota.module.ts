import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioMascotaPageRoutingModule } from './formulario-mascota-routing.module';

import { FormularioMascotaPage } from './formulario-mascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioMascotaPageRoutingModule
  ],
  declarations: [FormularioMascotaPage]
})
export class FormularioMascotaPageModule {}
