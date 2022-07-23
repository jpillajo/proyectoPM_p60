import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },
  {
    path: 'formulario-propietario',
    loadChildren: () => import('./darAdopcion/formulario-propietario/formulario-propietario.module').then( m => m.FormularioPropietarioPageModule)
  },
  {
    path: 'formulario-mascota',
    loadChildren: () => import('./darAdopcion/formulario-mascota/formulario-mascota.module').then( m => m.FormularioMascotaPageModule)
  },
  {
    path: 'envio-solicitud',
    loadChildren: () => import('./darAdopcion/envio-solicitud/envio-solicitud.module').then( m => m.EnvioSolicitudPageModule)
  },
  {
    path: 'formulario-adopcion',
    loadChildren: () => import('./adoptar/formulario-adopcion/formulario-adopcion.module').then( m => m.FormularioAdopcionPageModule)
  },
  {
    path: 'emvio-adopcion',
    loadChildren: () => import('./adoptar/emvio-adopcion/emvio-adopcion.module').then( m => m.EmvioAdopcionPageModule)
  },
  {
    path: 'datos-adopcion',
    loadChildren: () => import('./adoptar/datos-adopcion/datos-adopcion.module').then( m => m.DatosAdopcionPageModule)
  },
  {
    path: 'info-adopcion',
    loadChildren: () => import('./adoptar/info-adopcion/info-adopcion.module').then( m => m.InfoAdopcionPageModule)
  },
  {
    path: 'log-in',
    loadChildren: () => import('./administrador/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'menu-admin',
    loadChildren: () => import('./administrador/menu-admin/menu-admin.module').then( m => m.MenuAdminPageModule)
  },
  {
    path: 'adopciones',
    loadChildren: () => import('./administrador/adopciones/adopciones.module').then( m => m.AdopcionesPageModule)
  },
  {
    path: 'puesto',
    loadChildren: () => import('./administrador/puesto/puesto.module').then( m => m.PuestoPageModule)
  },
  {
    path: 'datos-adopciones',
    loadChildren: () => import('./administrador/datos-adopciones/datos-adopciones.module').then( m => m.DatosAdopcionesPageModule)
  },

  {
    path: 'datos-puesto-adopcion-mascota',
    loadChildren: () => import('./administrador/datos-puesto-adopcion-mascota/datos-puesto-adopcion-mascota.module').then( m => m.DatosPuestoAdopcionMascotaPageModule)
  },
  {
    path: 'datos-puesto-adopcion-persona',
    loadChildren: () => import('./administrador/datos-puesto-adopcion-persona/datos-puesto-adopcion-persona.module').then( m => m.DatosPuestoAdopcionPersonaPageModule)
  },
  {
    path: 'infoadopcion2',
    loadChildren: () => import('./adoptar/infoadopcion2/infoadopcion2.module').then( m => m.Infoadopcion2PageModule)
  },
  {
    path: 'datos',
    loadChildren: () => import('./administrador/datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'registrar-usuario',
    loadChildren: () => import('./usuario/registrar-usuario/registrar-usuario.module').then( m => m.RegistrarUsuarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
