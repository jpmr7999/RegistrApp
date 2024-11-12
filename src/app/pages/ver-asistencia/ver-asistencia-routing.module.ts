import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerAsistenciaPage } from './ver-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: VerAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerAsistenciaPageRoutingModule {}
