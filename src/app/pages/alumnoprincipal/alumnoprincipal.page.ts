import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocaldbService } from '../../Service/localdb.service';

@Component({
  selector: 'app-alumno-principal',
  templateUrl: './alumnoprincipal.page.html',
  styleUrls: ['./alumnoprincipal.page.scss'],
})
export class AlumnoPrincipalPage implements OnInit {
  historialAsistencias: { fecha: string, hora: string, nombre: string, institucion: string, curso: string }[] = [];
  nombreUsuario: string = '';

  constructor(private navCtrl: NavController, private localdbService: LocaldbService) {}

  ngOnInit() {
    this.localdbService.initializeHistorial(); // Inicializar historial específico del usuario actual
    this.historialAsistencias = this.localdbService.getHistorialAsistenciasActual(); // Cargar historial del usuario actual
    this.nombreUsuario = this.localdbService.getNombreUsuario();
    console.log('Nombre de usuario:', this.nombreUsuario);
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
    this.navCtrl.navigateForward('/escaneo');
  }
}
