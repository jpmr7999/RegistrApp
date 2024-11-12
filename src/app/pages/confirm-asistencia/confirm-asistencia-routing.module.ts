import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarAsistenciaPage } from './confirm-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmAsistenciaPageRoutingModule {}
