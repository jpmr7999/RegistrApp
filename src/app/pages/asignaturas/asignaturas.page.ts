import { Component, inject, OnInit } from '@angular/core';
import { AgregarAsignaturaComponent } from 'src/app/components/agregar-asignatura/agregar-asignatura.component';
import { AsignaturasService } from 'src/app/services/asignaturas.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  utilSvc = inject(AsignaturasService);

  ngOnInit() {
  }
  goBack() {
    window.history.back(); // Navega a la página anterior usando el historial del navegador
  }


  //para modal agregar asignatura
  addUpdateAsignatura(){

    this.utilSvc.presentModal({
      component : AgregarAsignaturaComponent,
      cssClass: 'add-update-modal'
    })
  }
}
