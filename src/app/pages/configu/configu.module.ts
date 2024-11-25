import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguPageRoutingModule } from './configu-routing.module';

import { ConfiguPage } from './configu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguPageRoutingModule
  ],
  declarations: [ConfiguPage]
})
export class ConfiguPageModule {}
