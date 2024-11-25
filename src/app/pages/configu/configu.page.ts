import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-configu',
  templateUrl: './configu.page.html',
  styleUrls: ['./configu.page.scss'],
})
export class ConfiguPage implements OnInit {
  email: string = ''; // Inicialización
  newPassword: string = ''; // Inicialización
  confirmPassword: string = ''; // Inicialización

  constructor(private router: Router, private toastController: ToastController) { }

  ngOnInit() {}

  async resetPassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.showToast('Las contraseñas no coinciden.');
      return;
    }

    try {
      await this.simulatePasswordReset(this.email, this.newPassword);
      this.showToast('Contraseña restablecida con éxito.');
      this.router.navigate(['/login']);
    } catch (error) {
      this.showToast('Error al restablecer la contraseña. Inténtalo de nuevo.');
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  private async simulatePasswordReset(email: string, newPassword: string) {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
  goBack() {
    window.history.back(); // Navega a la página anterior usando el historial del navegador
  }
}
