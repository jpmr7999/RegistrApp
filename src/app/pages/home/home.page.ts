import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { FirebaseUserService } from '../../Service/firebaseuser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private firebaseUserService: FirebaseUserService
  ) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async onSubmit() {
    if (this.email.trim() === '' || this.password.trim() === '') {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor, completa ambos campos.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    try {
      await this.firebaseUserService.autenticarUsuario(this.email, this.password);
      localStorage.setItem('loggedInUser', this.email);
      this.router.navigate(['/alumnoprincipal']);
    } catch (error: any) {
      const errorMessage =
        error?.message ?? 'Ha ocurrido un error durante la autenticación.';
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: errorMessage,
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  // Método para restablecer la contraseña
  async onResetPassword() {
    if (this.email.trim() === '') {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor, ingresa tu correo electrónico para restablecer la contraseña.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    try {
      await this.firebaseUserService.resetPassword(this.email); // Llamada al servicio
      const alert = await this.alertCtrl.create({
        header: 'Éxito',
        message: 'Se ha enviado un enlace para restablecer tu contraseña a tu correo electrónico.',
        buttons: ['OK'],
      });
      await alert.present();
    } catch (error: any) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: error?.message ?? 'Ha ocurrido un error al intentar restablecer la contraseña.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
