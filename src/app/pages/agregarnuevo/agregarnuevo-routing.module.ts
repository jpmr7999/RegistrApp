import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarnuevoPage } from './agregarnuevo.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarnuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarnuevoPageRoutingModule {}
