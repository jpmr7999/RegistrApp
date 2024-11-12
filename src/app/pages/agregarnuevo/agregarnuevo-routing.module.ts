import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarNuevoPage } from './agregarnuevo.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarNuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarnuevoPageRoutingModule {}
