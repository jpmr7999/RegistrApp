import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscaneoPageRoutingModule } from './escaneo-routing.module';

import { EscaneoPage } from './escaneo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscaneoPageRoutingModule
  ],
  declarations: [EscaneoPage]
})
export class EscaneoPageModule {}
