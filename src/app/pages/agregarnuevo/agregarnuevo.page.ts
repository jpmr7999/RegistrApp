import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { LocaldbService } from '../../Service/localdb.service'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-agregarnuevo',
  templateUrl: './agregarnuevo.page.html',
  styleUrls: ['./agregarnuevo.page.scss'],
})
export class AgregarNuevoPage {
  primerNombre: string = '';
  primerApellido: string = '';
  password: string = '';
  rol: string = 'alumno'; // Por defecto, rol es 'alumno'
  emailPrefix: string = ''; // Prefijo del email editable
  dominio: string = '@duocuc.cl'; // Dominio por defecto
  universidad: string = 'DuocUC'; // Universidad por defecto es DuocUC

  constructor(
    private navCtrl: NavController,
    private localdbService: LocaldbService,
    private alertController: AlertController
  ) {}

  async onSubmit() {
    // Validación de campos
    if (!this.primerNombre || !this.primerApellido || !this.password || !this.emailPrefix || !this.rol || !this.universidad) {
      await this.mostrarAlerta('Error', 'Por favor, rellena todos los campos obligatorios.');
      return;
    }

    const nuevoUsuario = {
      nombre: `${this.primerNombre} ${this.primerApellido}`,
      email: `${this.emailPrefix}${this.dominio}`,
      password: this.password,
      rol: this.rol,
      institucion: this.universidad // Incorporando la institución
    };

    // Guardar usuario en localdb
    this.localdbService.guardarUsuario(nuevoUsuario);
    await this.mostrarAlerta('Éxito', 'El usuario ha sido agregado exitosamente.');
    this.navCtrl.navigateRoot('/home'); // Redirigir a la página principal
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

  updateDominio() {
    if (this.universidad === 'DuocUC') {
      this.dominio = this.rol === 'alumno' ? '@duocuc.cl' : '@profesor.duocuc.cl';
    } else if (this.universidad === 'Inacap') {
      this.dominio = this.rol === 'alumno' ? '@inacap.cl' : '@profesor.inacap.cl';
    } else if (this.universidad === 'Otra') {
      this.dominio = this.rol === 'alumno' ? '@otroalumno.cl' : '@otroprofesor.cl';
    }
  }
}
