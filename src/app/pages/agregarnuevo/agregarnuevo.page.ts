import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocaldbService } from '../../Service/localdb.service';

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

  constructor(private navCtrl: NavController, private localdbService: LocaldbService) {}

  onSubmit() {
    // Validar si todos los campos están completos
    if (!this.primerNombre || !this.primerApellido || !this.password || !this.emailPrefix || !this.rol || !this.universidad) {
      alert('Por favor, rellena todos los campos obligatorios.');
      return; // Detener la ejecución si falta algún campo
    }

    const nuevoUsuario = {
      nombre: `${this.primerNombre} ${this.primerApellido}`,
      email: `${this.emailPrefix}${this.dominio}`, // Concatenar el prefijo con el dominio
      password: this.password,
      rol: this.rol,
    };

    // Llama al servicio para guardar el nuevo usuario
    this.localdbService.guardarUsuario(nuevoUsuario);
    this.navCtrl.navigateBack('/admin'); // Redirige a la página de administración
  }

  // Método para cambiar el dominio según la universidad y rol seleccionados
  onUniversidadChange() {
    this.updateDominio(); // Actualiza el dominio al cambiar la universidad
  }

  // Método para cambiar el dominio según el rol
  onRolChange() {
    this.updateDominio();  // Actualiza el dominio al cambiar el rol
  }

  // Actualiza el dominio basado en el rol y la universidad
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
