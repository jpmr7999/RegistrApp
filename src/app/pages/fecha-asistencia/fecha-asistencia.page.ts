import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fecha-asistencia',
  templateUrl: './fecha-asistencia.page.html',
  styleUrls: ['./fecha-asistencia.page.scss'],
})
export class FechaAsistenciaPage {
  selectedDate: string = '';
  selectedSection: string = '';

  constructor(private navCtrl: NavController) {}

  onDateSelected(event: any) {
    this.selectedDate = event.detail.value; // Obtener la fecha seleccionada
  }

  onSectionSelected(event: any) {
    this.selectedSection = event.detail.value; // Obtener la sección seleccionada
    console.log('Sección seleccionada:', this.selectedSection);
  }

  confirmarAsistencia() {
    if (this.selectedDate && this.selectedSection) {
      console.log('Asistencia marcada para la fecha:', this.selectedDate);
      console.log('Sección seleccionada:', this.selectedSection);
      // Navegar a la página del código QR
      this.navCtrl.navigateForward('/qr-code');
    } else {
      console.log('Por favor selecciona una fecha y una sección.');
    }
  }
}
