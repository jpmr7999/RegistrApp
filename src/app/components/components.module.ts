import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarAsignaturaComponent } from './agregar-asignatura/agregar-asignatura.component';
import { ListaAsignaturaComponent } from './lista-asignatura/lista-asignatura.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // Importa IonicModule aquí
import { HeaderComponent } from './header/header.component';
import { ListaAlumnoComponent } from './lista-alumno/lista-alumno.component';




@NgModule({
  declarations: [AgregarAsignaturaComponent,ListaAsignaturaComponent,HeaderComponent,ListaAlumnoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,  // Asegúrate de incluir IonicModule aquí
  ],
  exports: [
    AgregarAsignaturaComponent,ListaAsignaturaComponent,ListaAlumnoComponent
    
  ]
})
export class ComponentsModule { }
