import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmvioAdopcionPage } from './emvio-adopcion.page';

const routes: Routes = [
  {
    path: '',
    component: EmvioAdopcionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmvioAdopcionPageRoutingModule {}
