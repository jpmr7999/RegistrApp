import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciageneralPageRoutingModule } from './asistenciageneral-routing.module';

import { AsistenciageneralPage } from './asistenciageneral.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciageneralPageRoutingModule,
    ComponentsModule  
],
  declarations: [AsistenciageneralPage]
})
export class AsistenciageneralPageModule {}
