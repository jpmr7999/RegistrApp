import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from '../Interfaces/usuariolog'; // Asegúrate de tener la ruta correcta
import { Observable, from } from 'rxjs';  // Importar 'from' de rxjs

@Injectable({
  providedIn: 'root',
})
export class FirebaseUserService {
  private collectionName = 'usuarios';

  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth // Inyecta AngularFireAuth para usar la autenticación
  ) {}

  /**
   * Crear un nuevo usuario y devolver el ID generado
   * @param usuario Usuario a crear
   * @returns Promise con el ID generado
   */
  async crearUsuario(usuario: Usuario): Promise<string> {
    const id = this.firestore.createId(); // Genera un ID único
    usuario.id = id; // Asigna el ID al usuario
    await this.firestore.collection(this.collectionName).doc(id).set(usuario);
    return id; // Devuelve el ID del usuario creado
  }

  /**
   * Obtener todos los usuarios
   * @returns Observable con la lista de usuarios
   */
  obtenerUsuarios(): Observable<Usuario[]> {
    return this.firestore.collection<Usuario>(this.collectionName).valueChanges();
  }

  /**
   * Autenticar un usuario con su email y contraseña
   * @param email Email del usuario
   * @param password Contraseña del usuario
   * @returns Observable con el resultado de la autenticación
   */
  async autenticarUsuario(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Ha ocurrido un error desconocido.');
      }
    }
  }


  /**
   * Obtener un usuario por su ID
   * @param id ID del usuario
   * @returns Observable con el usuario encontrado o undefined si no existe
   */
  obtenerUsuarioPorId(id: string): Observable<Usuario | undefined> {
    return this.firestore.collection<Usuario>(this.collectionName).doc(id).valueChanges();
  }

  /**
   * Actualizar un usuario por su ID
   * @param id ID del usuario
   * @param datos Datos parciales a actualizar
   * @returns Promise<void>
   */
  actualizarUsuario(id: string, datos: Partial<Usuario>): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).update(datos);
  }

  /**
   * Eliminar un usuario por su ID
   * @param id ID del usuario
   * @returns Promise<void>
   */
  eliminarUsuario(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }

  async resetPassword(email: string): Promise<void> {
    try {
      await this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Error desconocido al enviar el correo de restablecimiento.');
      }
    }
  }

}
