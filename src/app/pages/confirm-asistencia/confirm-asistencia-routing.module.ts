import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmAsistenciaPage } from './confirm-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmAsistenciaPageRoutingModule {}
