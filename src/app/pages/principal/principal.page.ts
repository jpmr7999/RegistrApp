import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocaldbService } from '../../Service/localdb.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  userName: string = '';
  userInstitution: string = '';

  constructor(
    private navCtrl: NavController,
    private localdbService: LocaldbService
  ) {}

  ngOnInit() {
    // Obtener nombre e institución del usuario al cargar la página
    this.userName = this.localdbService.getNombreUsuario();
    this.userInstitution = this.localdbService.getInstitucionUsuario();
  }

  // Va a la página de selección de fecha de asistencia
  goToFechaAsistenciaPage() {
    this.navCtrl.navigateForward('/fecha-asistencia');
  }

  // Función para cerrar sesión
  logout() {
    this.navCtrl.navigateRoot('/home'); // Redirige a la página de inicio
  }
}
