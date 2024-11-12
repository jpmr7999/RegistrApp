import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscanearqrPage } from './escanearqr.page';

const routes: Routes = [
  {
    path: '',
    component: EscanearqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscanearqrPageRoutingModule {}
