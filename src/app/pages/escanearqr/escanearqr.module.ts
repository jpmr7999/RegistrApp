import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscanearqrPageRoutingModule } from './escanearqr-routing.module';

import { EscanearqrPage } from './escanearqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscanearqrPageRoutingModule
  ],
  declarations: [EscanearqrPage]
})
export class EscanearqrPageModule {}
