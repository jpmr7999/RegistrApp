import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocaldbService } from '../../Service/localdb.service'; // Cambiado al nuevo servicio

@Component({
  selector: 'app-confirmar-asistencia',
  templateUrl: './confirm-asistencia.page.html',
  styleUrls: ['./confirm-asistencia.page.scss'],
})
export class ConfirmarAsistenciaPage {

  constructor(private navCtrl: NavController, private localdbService: LocaldbService) { }

  confirmarAsistencia() {
    const fechaActual = new Date();
    const nuevaAsistencia = {
      fecha: fechaActual.toLocaleDateString(),
      hora: fechaActual.toLocaleTimeString(),
      nombre: 'Jose Vasquez', // Nombre del alumno
      institucion: 'Duoc UC',
      curso: 'Informática y redes ocultas'
    };

    // Guarda la asistencia en localStorage
    this.localdbService.guardarAsistencia(nuevaAsistencia);

    // Navega de regreso a la página principal del alumno
    this.navCtrl.navigateRoot('/alumno-principal');
  }

  cancelar() {
    // Regresa a la página principal sin guardar asistencia
    this.navCtrl.back();
  }
}
