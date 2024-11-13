import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocaldbService } from '../../Service/localdb.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage {
  userName: string = '';
  userInstitution: string = '';

  constructor(private navCtrl: NavController, private localdbService: LocaldbService) {}

  ionViewWillEnter() {
    this.loadUserData();
  }

  loadUserData() {
    const loggedInUserEmail = localStorage.getItem('loggedInUser');
    if (!loggedInUserEmail) {
      console.error('Usuario no encontrado en localStorage');
      return;
    }

    const users = this.localdbService.getUsers();
    const user = Object.values(users).find((user: any) => user.email === loggedInUserEmail);

    if (user) {
      this.userName = users.nombre;
      this.userInstitution = users.rol === 'alumno' ? 'DuocUC' : 'Inacap';
    } else {
      console.error('Usuario no encontrado en la base de datos local');
    }
  }

  goToFechaAsistenciaPage() {
    this.navCtrl.navigateForward('/fecha-asistencia');
  }

  logout() {
    localStorage.removeItem('loggedInUser'); // Limpia el usuario al cerrar sesión
    this.navCtrl.navigateRoot('/home');
  }
}
