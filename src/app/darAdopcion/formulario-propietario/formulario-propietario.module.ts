import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioPropietarioPageRoutingModule } from './formulario-propietario-routing.module';

import { FormularioPropietarioPage } from './formulario-propietario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioPropietarioPageRoutingModule
  ],
  declarations: [FormularioPropietarioPage]
})
export class FormularioPropietarioPageModule {}
