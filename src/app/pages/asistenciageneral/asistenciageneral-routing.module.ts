import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciageneralPage } from './asistenciageneral.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciageneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciageneralPageRoutingModule {}
