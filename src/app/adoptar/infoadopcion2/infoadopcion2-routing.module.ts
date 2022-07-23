import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Infoadopcion2Page } from './infoadopcion2.page';

const routes: Routes = [
  {
    path: '',
    component: Infoadopcion2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Infoadopcion2PageRoutingModule {}
