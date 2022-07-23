import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosAdopcionesPage } from './datos-adopciones.page';

const routes: Routes = [
  {
    path: '',
    component: DatosAdopcionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosAdopcionesPageRoutingModule {}
