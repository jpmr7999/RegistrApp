import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit() {}

  async login() {
    // Simulación de autenticación
    const isAuthenticated = await this.authenticateUser(this.email, this.password);

    if (isAuthenticated) {
      // Obtener el dominio del correo electrónico
      const emailDomain = this.getEmailDomain(this.email);

      // Redirigir según el dominio del correo electrónico
      if (emailDomain === 'duocuc.cl') {
        this.router.navigate(['/dashboard-estudiante']);
      } else if (emailDomain === 'profesor.duoc.cl') {
        this.router.navigate(['/dashboard-profesor']);
      } else {
        this.router.navigate(['/default-dashboard']);
      }
    } else {
      // Mostrar un mensaje de error o realizar otra acción
      console.log("Error: Credenciales incorrectas.");
    }
  }

  // Función para extraer el dominio del correo electrónico
  getEmailDomain(email: string): string {
    return email.substring(email.lastIndexOf('@') + 1);
  }

  // Función para simular la autenticación del usuario
  async authenticateUser(email: string, password: string): Promise<boolean> {
    // Aquí iría la lógica real de autenticación (consulta a la API, etc.)
    // Esta es solo una simulación de autenticación
    return email === 'usuario@duocuc.cl' && password === '123456'
        || email === 'profesor@profesor.duoc.cl' && password === '123456';
  }
}
