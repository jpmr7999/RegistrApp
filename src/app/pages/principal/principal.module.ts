import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PrincipalPageRoutingModule } from './principal-routing.module';
import { PrincipalPage } from './principal.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PrincipalPageRoutingModule
  ],
  declarations: [PrincipalPage]
})
export class PrincipalPageModule { }
