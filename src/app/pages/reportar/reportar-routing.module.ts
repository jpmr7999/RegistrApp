import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportarPage } from './reportar.page';

const routes: Routes = [
  {
    path: '',
    component: ReportarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportarPageRoutingModule {}
