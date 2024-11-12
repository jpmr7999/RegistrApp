import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestablecerPage } from './restablecer.page';

const routes: Routes = [
  {
    path: '',
    component: RestablecerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestablecerPageRoutingModule {}
