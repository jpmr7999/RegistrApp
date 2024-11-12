import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscaneoPage } from './escaneo.page';

const routes: Routes = [
  {
    path: '',
    component: EscaneoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscaneoPageRoutingModule {}
