import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario-log';
import { LocaldbService } from '../../services/localdb.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usr: Usuario = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    correo: '',
  };

  constructor(
    private db: LocaldbService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Usuario o clave incorrecto',
      duration: 1500,
      position: position,
      color: 'danger',
      header: '¡Error!',
      cssClass: 'texttoast',
    });

    await toast.present();
  }

  logear() {
    const buscado = this.db.obtener(this.usr.correo);

    buscado.then(datos => {
      if (datos !== null) {
        // Verificar credenciales
        if (datos.correo === this.usr.correo && datos.password === this.usr.password) {
          // Obtener el dominio del correo electrónico
          const emailDomain = this.getEmailDomain(this.usr.correo);

          // Redirigir según el dominio del correo electrónico
          if (emailDomain === 'duocuc.cl') {
            this.router.navigate(['/alumno']);
          } else if (emailDomain === 'profesor.duoc.cl') {
            this.router.navigate(['/asignaturas']);
          } 
        } else {  
          // Mostrar mensaje de error si la contraseña es incorrecta
          this.presentToast('top');
        }
      } else {
        // Mostrar mensaje de error si el usuario no se encuentra
        this.presentToast('top');
      }
    });
  }

  // Función para extraer el dominio del correo electrónico
  getEmailDomain(email: string): string {
    return email.substring(email.lastIndexOf('@') + 1);
  }
  goBack() {
    window.history.back(); // Navega a la página anterior usando el historial del navegador
  }
}
