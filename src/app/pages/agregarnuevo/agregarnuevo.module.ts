import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarnuevoPageRoutingModule } from './agregarnuevo-routing.module';

import { AgregarnuevoPage } from './agregarnuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarnuevoPageRoutingModule
  ],
  declarations: [AgregarnuevoPage]
})
export class AgregarnuevoPageModule {}
