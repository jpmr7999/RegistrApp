import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoPrincipalPageRoutingModule } from './alumnoprincipal-routing.module';

import { AlumnoPrincipalPage } from './alumnoprincipal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoPrincipalPageRoutingModule
  ],
  declarations: [AlumnoPrincipalPage]
})
export class AlumnoPrincipalPageModule {}
