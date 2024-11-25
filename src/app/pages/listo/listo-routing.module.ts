import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListoPage } from './listo.page';

const routes: Routes = [
  {
    path: '',
    component: ListoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListoPageRoutingModule {}
