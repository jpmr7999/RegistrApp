import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'ver-asistencia',
    loadChildren: () => import('./pages/ver-asistencia/ver-asistencia.module').then( m => m.VerAsistenciaPageModule)
  },
  {
    path: 'agregarnuevo',
    loadChildren: () => import('./pages/agregarnuevo/agregarnuevo.module').then( m => m.AgregarnuevoPageModule)
  },
  {
    path: 'alumnoprincipal',
    loadChildren: () => import('./pages/alumnoprincipal/alumnoprincipal.module').then( m => m.AlumnoprincipalPageModule)
  },
  {
    path: 'confirm-asistencia',
    loadChildren: () => import('./pages/confirm-asistencia/confirm-asistencia.module').then( m => m.ConfirmAsistenciaPageModule)
  },
  {
    path: 'fecha-asistencia',
    loadChildren: () => import('./pages/fecha-asistencia/fecha-asistencia.module').then( m => m.FechaAsistenciaPageModule)
  },
  {
    path: 'reestablecer',
    loadChildren: () => import('./pages/reestablecer/reestablecer.module').then( m => m.ReestablecerPageModule)
  },
  {
    path: 'codigo',
    loadChildren: () => import('./pages/codigo/codigo.module').then( m => m.CodigoPageModule)
  },
  {
    path: 'escaneo',
    loadChildren: () => import('./pages/escaneo/escaneo.module').then( m => m.EscaneoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
