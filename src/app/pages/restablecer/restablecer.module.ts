import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReestablecerPageRoutingModule } from './restablecer-routing.module';

import { ReestablecerPage } from './restablecer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReestablecerPageRoutingModule
  ],
  declarations: [ReestablecerPage]
})
export class ReestablecerPageModule {}
