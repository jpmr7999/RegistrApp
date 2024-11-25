import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguPage } from './configu.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguPageRoutingModule {}
