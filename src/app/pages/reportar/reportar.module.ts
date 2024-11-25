import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportarPageRoutingModule } from './reportar-routing.module';

import { ReportarPage } from './reportar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportarPageRoutingModule
  ],
  declarations: [ReportarPage]
})
export class ReportarPageModule {}
