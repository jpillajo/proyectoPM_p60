import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvioSolicitudPage } from './envio-solicitud.page';

const routes: Routes = [
  {
    path: '',
    component: EnvioSolicitudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvioSolicitudPageRoutingModule {}
