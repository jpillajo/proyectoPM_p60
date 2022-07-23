import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnvioSolicitudPageRoutingModule } from './envio-solicitud-routing.module';

import { EnvioSolicitudPage } from './envio-solicitud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvioSolicitudPageRoutingModule
  ],
  declarations: [EnvioSolicitudPage]
})
export class EnvioSolicitudPageModule {}
