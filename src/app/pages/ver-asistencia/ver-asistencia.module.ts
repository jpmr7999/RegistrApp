import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerAsistenciaPageRoutingModule } from './ver-asistencia-routing.module';

import { VerAsistenciaPage } from './ver-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerAsistenciaPageRoutingModule
  ],
  declarations: [VerAsistenciaPage]
})
export class VerAsistenciaPageModule {}
