import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocaldbService } from '../../Service/localdb.service'; // Cambiado al nuevo servicio

@Component({
  selector: 'app-alumno-principal',
  templateUrl: './alumno-principal.page.html',
  styleUrls: ['./alumno-principal.page.scss'],
})
export class AlumnoPrincipalPage implements OnInit {
  historialAsistencias: { fecha: string, hora: string, nombre: string, institucion: string, curso: string }[] = [];
  nombreUsuario: string = ''; // Nueva propiedad para almacenar el nombre del usuario

  constructor(private navCtrl: NavController, private localdbService: LocaldbService) { }

  ngOnInit() {
    // Inicializa el historial de asistencias si es necesario
    this.localdbService.initializeHistorial();

    // Carga el historial de asistencias desde localStorage
    this.historialAsistencias = this.localdbService.getHistorialAsistencias();

    // Obtiene el nombre del usuario
    this.nombreUsuario = this.localdbService.getNombreUsuario();
    console.log('Nombre de usuario:', this.nombreUsuario); // Para depuración
  }

  irAHome() {
    this.navCtrl.navigateRoot('/home');
  }

  logout() {
    this.navCtrl.navigateRoot('/alumno');
  }

  irAAsistencia() {
    this.navCtrl.navigateForward('/ver-asistencia');
  }

  irACodigoQR() {
    this.navCtrl.navigateForward('/escanearqr');
  }
}
