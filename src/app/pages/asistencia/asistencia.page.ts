import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocaldbService } from 'src/app/services/localdb.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  historialAsistencias: { fecha: string, hora: string, nombre: string, institucion: string, curso: string }[] = [];
  nombreUsuario: string = ''; // Nueva propiedad para almacenar el nombre del usuario

  constructor(private navCtrl: NavController, private localdbService: LocaldbService) { }

  ngOnInit() {
    // Inicializa el historial de asistencias si es necesario
    this.localdbService.initializeHistorial();

    // Carga el historial de asistencias desde localStorage
    this.historialAsistencias = this.localdbService.getHistorialAsistencias();

  }
  goBack() {
    window.history.back(); // Navega a la página anterior usando el historial del navegador
  }

}
