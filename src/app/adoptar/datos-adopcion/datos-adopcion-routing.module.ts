import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosAdopcionPage } from './datos-adopcion.page';

const routes: Routes = [
  {
    path: '',
    component: DatosAdopcionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosAdopcionPageRoutingModule {}
