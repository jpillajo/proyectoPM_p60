import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioAdopcionPageRoutingModule } from './formulario-adopcion-routing.module';

import { FormularioAdopcionPage } from './formulario-adopcion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioAdopcionPageRoutingModule
  ],
  declarations: [FormularioAdopcionPage]
})
export class FormularioAdopcionPageModule {}
