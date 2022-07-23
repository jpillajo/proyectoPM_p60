import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoAdopcionPage } from './info-adopcion.page';

const routes: Routes = [
  {
    path: '',
    component: InfoAdopcionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoAdopcionPageRoutingModule {}
