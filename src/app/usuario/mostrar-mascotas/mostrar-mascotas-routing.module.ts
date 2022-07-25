import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarMascotasPage } from './mostrar-mascotas.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarMascotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarMascotasPageRoutingModule {}
