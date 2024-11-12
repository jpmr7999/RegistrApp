import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FechaAsistenciaPageRoutingModule } from './fecha-asistencia-routing.module';

import { FechaAsistenciaPage } from './fecha-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FechaAsistenciaPageRoutingModule
  ],
  declarations: [FechaAsistenciaPage]
})
export class FechaAsistenciaPageModule {}
