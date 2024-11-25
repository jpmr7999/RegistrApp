import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListoPageRoutingModule } from './listo-routing.module';

import { ListoPage } from './listo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListoPageRoutingModule
  ],
  declarations: [ListoPage]
})
export class ListoPageModule {}
