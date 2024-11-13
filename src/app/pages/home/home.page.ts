import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { LocaldbService } from '../../Service/localdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  email: string = '';
  password: string = '';
  showPassword: boolean = false; // Controla la visibilidad de la contraseña

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private localDbService: LocaldbService
  ) {
    this.localDbService.initializeCredentials();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword; // Alterna la visibilidad
  }

  async onSubmit() {
    if (this.email.trim() === '' || this.password.trim() === '') {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor, completa ambos campos.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      const users = this.localDbService.getUsers();
      const userKeys = Object.keys(users);
      const validUser = userKeys.find(key =>
        users[key].email === this.email && users[key].password === this.password
      );

      if (validUser) {
        // Almacenar el email del usuario logueado
        localStorage.setItem('loggedInUser', users[validUser].email);

        if (users[validUser].rol === 'profesor') {
          this.router.navigate(['./principal']);
        } else if (users[validUser].rol === 'admin') {
          // Redirigir a la página de administración si el rol es admin
          this.router.navigate(['/admin']); // Ajusta la ruta a la página de administración que desees
        } else {
          this.router.navigate(['/alumnoprincipal']);
        }
      } else {
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: 'Email o contraseña incorrectos.',
          buttons: ['OK']
        });
        await alert.present();
      }
    }
  }

  async onResetPassword() {
    this.navCtrl.navigateForward('/reestablecer');
  }

  sendPasswordResetEmail() {
    console.log('Correo de restablecimiento enviado');
  }
}
