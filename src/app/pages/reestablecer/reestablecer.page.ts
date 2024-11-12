import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LocaldbService } from '../../Service/localdb.service'; // Importa el servicio

@Component({
  selector: 'app-reestablecer',
  templateUrl: './reestablecer.page.html',
  styleUrls: ['./reestablecer.page.scss'],
})
export class ReestablecerPage {
  email: string = '';

  constructor(
    private alertCtrl: AlertController,
    private localdbService: LocaldbService // Inyecta el servicio
  ) {}

  async sendResetLink() {
    if (this.email.trim() === '') {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor, ingresa tu correo electrónico.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Verifica si el correo ingresado existe en la base de datos
    const users = this.localdbService.getUsers();
    const userExists = Object.values(users).some(
      (user: any) => user.email === this.email
    );

    if (!userExists) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'El correo ingresado no está registrado en la base de datos.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Llama al método que simula el envío del correo de restablecimiento si el correo es válido
    this.sendPasswordResetEmail();
  }

  async sendPasswordResetEmail() {
    console.log(`Correo de restablecimiento enviado a ${this.email}`);
    const alert = await this.alertCtrl.create({
      header: 'Enlace Enviado',
      message: 'Hemos enviado un enlace para restablecer tu contraseña a tu correo.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
