import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioPropietarioPage } from './formulario-propietario.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioPropietarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioPropietarioPageRoutingModule {}
