import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoprincipalPageRoutingModule } from './alumnoprincipal-routing.module';

import { AlumnoprincipalPage } from './alumnoprincipal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoprincipalPageRoutingModule
  ],
  declarations: [AlumnoprincipalPage]
})
export class AlumnoprincipalPageModule {}
