import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoprincipalPage } from './alumnoprincipal.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoprincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoprincipalPageRoutingModule {}
