import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fecha-asistencia',
  templateUrl: './fecha-asistencia.page.html',
  styleUrls: ['./fecha-asistencia.page.scss'],
})
export class FechaAsistenciaPage implements OnInit {
  selectedDate: string = '';
  selectedSection: string = '';

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Establecer la fecha actual automáticamente
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Mes comienza en 0
    const year = today.getFullYear();
    this.selectedDate = `${year}-${month}-${day}`; // Establecer el formato 'YYYY-MM-DD'
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
