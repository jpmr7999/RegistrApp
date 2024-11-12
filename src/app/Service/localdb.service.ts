import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaldbService {
  constructor() { }

  // Método para inicializar las credenciales
  initializeCredentials() {
    const users = {
      admin: {
        email: 'admin@profesor.duoc.cl',
        password: 'duoc2024',
        nombre: 'Juan Perez',
        rol: 'administrador'
      },
      alumno: {
        email: 'alumno@duocuc.cl',
        password: 'duoc2024',
        nombre: 'Jose Vasquez',
        rol: 'alumno'
      },
      profesor: {
        email: 'profesor@profesor.duoc.cl',
        password: 'duoc2024',
        nombre: 'Luis Morales',
        rol: 'profesor'
      },
      inacapAlumno: {
        email: 'alumno@inacap.cl',
        password: 'inacap2024',
        nombre: 'Carlos Garcia',
        rol: 'alumno'
      },
      inacapProfesor: {
        email: 'profesor@profesor.inacap.cl',
        password: 'inacap2024',
        nombre: 'María Rodriguez',
        rol: 'profesor'
      },
      otroAlumno: {
        email: 'alumno@otroalumno.cl',
        password: 'otro2024',
        nombre: 'Ana Lopez',
        rol: 'alumno'
      },
      otroProfesor: {
        email: 'profesor@otroprofesor.cl',
        password: 'otro2024',
        nombre: 'Pedro Gonzalez',
        rol: 'profesor'
      },
      otrotro: {
        email: 'mat.gonzalez6@duocuc.cl',
        password: 'uwu',
        nombre: 'Matias Gonzalez',
        rol: 'Alumno'
      },
    };
    localStorage.setItem('users', JSON.stringify(users));
  }

  // Método para obtener todas las credenciales
  getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : {};
  }

  // Método para guardar un nuevo usuario
  guardarUsuario(nuevoUsuario: { nombre: string; email: string; password: string; rol: string }) {
    const users = this.getUsers();
    console.log('Guardando usuario:', nuevoUsuario); // Para depuración
    users[nuevoUsuario.email] = nuevoUsuario; // Guarda el usuario utilizando su email como clave
    localStorage.setItem('users', JSON.stringify(users));
  }

  // Método para inicializar el historial de asistencias
  initializeHistorial() {
    if (!localStorage.getItem('historialAsistencias')) {
      localStorage.setItem('historialAsistencias', JSON.stringify([])); // Inicializa el historial vacío
    }
  }

  // Método para guardar una nueva asistencia en el historial
  guardarAsistencia(asistencia: { fecha: string; hora: string; nombre: string; institucion: string; curso: string }) {
    const historialAsistencias = this.getHistorialAsistencias(); // Obtiene el historial actual
    historialAsistencias.push(asistencia); // Añade la nueva asistencia
    localStorage.setItem('historialAsistencias', JSON.stringify(historialAsistencias)); // Guarda el nuevo historial en localStorage
  }

  // Método para obtener el historial de asistencias
  getHistorialAsistencias() {
    const historialAsistencias = localStorage.getItem('historialAsistencias');
    return historialAsistencias ? JSON.parse(historialAsistencias) : [];
  }

  // Método para obtener el nombre del usuario logueado
  getNombreUsuario() {
    const users = this.getUsers();
    const loggedInUserEmail = localStorage.getItem('loggedInUser'); // Asegúrate de que esta línea esté correcta
    const user = Object.keys(users).find(key => users[key].email === loggedInUserEmail);
    return user ? users[user].nombre : '';
  }
}
