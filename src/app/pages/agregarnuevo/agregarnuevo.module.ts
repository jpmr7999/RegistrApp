import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgregarnuevoPageRoutingModule } from './agregarnuevo-routing.module';
import { AgregarNuevoPage } from './agregarnuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarnuevoPageRoutingModule
  ],
  declarations: [AgregarNuevoPage]
})
export class AgregarnuevoPageModule {}
