import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioMascotaPage } from './formulario-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioMascotaPageRoutingModule {}
