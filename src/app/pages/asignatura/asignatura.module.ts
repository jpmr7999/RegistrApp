import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturaPageRoutingModule } from './asignatura-routing.module';

import { AsignaturaPage } from './asignatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturaPageRoutingModule
  ],
  declarations: [AsignaturaPage]
})
export class AsignaturaPageModule {}
