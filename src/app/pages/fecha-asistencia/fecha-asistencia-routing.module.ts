import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FechaAsistenciaPage } from './fecha-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: FechaAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FechaAsistenciaPageRoutingModule {}
