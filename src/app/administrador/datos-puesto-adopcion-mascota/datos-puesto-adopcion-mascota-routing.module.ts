import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosPuestoAdopcionMascotaPage } from './datos-puesto-adopcion-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: DatosPuestoAdopcionMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosPuestoAdopcionMascotaPageRoutingModule {}
