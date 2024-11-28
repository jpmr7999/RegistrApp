import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { FirebaseUserService } from '../../Service/firebaseuser.service'; // Asegúrate de que la ruta sea correcta
import { Usuario } from '../../Interfaces/usuariolog'; // Asegúrate de importar la interfaz Usuario

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
    private firebaseUserService: FirebaseUserService // Inyectamos el servicio de Firebase
  ) {}

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
      // Usamos Firebase en lugar de LocaldbService para obtener los usuarios
      this.firebaseUserService.obtenerUsuarios().subscribe(async (usuarios: Usuario[]) => {
        const validUser = usuarios.find(usuario =>
          usuario.email === this.email && usuario.contraseña === this.password
        );

        if (validUser) {
          // Almacenar el email del usuario logueado
          localStorage.setItem('loggedInUser', validUser.email);

          if (validUser.rol === 'profesor') {
            this.router.navigate(['./principal']);
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

      });
    }
  }

  async onResetPassword() {
    this.navCtrl.navigateForward('/reestablecer');
  }

  sendPasswordResetEmail() {
    console.log('Correo de restablecimiento enviado');
  }
}
