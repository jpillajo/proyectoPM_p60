import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosPuestoAdopcionPersonaPage } from './datos-puesto-adopcion-persona.page';

const routes: Routes = [
  {
    path: '',
    component: DatosPuestoAdopcionPersonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosPuestoAdopcionPersonaPageRoutingModule {}
