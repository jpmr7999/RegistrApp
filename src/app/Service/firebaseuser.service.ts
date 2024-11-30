import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from '../Interfaces/usuariolog'; // Ensure the path is correct
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseUserService {
  private collectionName = 'usuarios';

  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth // Injects AngularFireAuth for authentication
  ) {}

  /**
   * Create a new user and return the generated ID
   * @param usuario User to create
   * @returns Promise with the generated ID
   */
  async crearUsuario(usuario: Usuario): Promise<string> {
    const id = this.firestore.createId(); // Generates a unique ID
    usuario.id = id; // Assign the ID to the user
    await this.firestore.collection(this.collectionName).doc(id).set(usuario);
    return id; // Returns the created user ID
  }

  /**
   * Get all users
   * @returns Observable with the list of users
   */
  obtenerUsuarios(): Observable<Usuario[]> {
    return this.firestore.collection<Usuario>(this.collectionName).valueChanges();
  }

  /**
   * Authenticate a user with email and password
   * @param email User email
   * @param password User password
   * @returns Promise<void> for authentication result
   */
  async autenticarUsuario(email: string, password: string): Promise<void> {
    await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Get a user by ID
   * @param id User ID
   * @returns Observable with the user found or undefined if not found
   */
  obtenerUsuarioPorId(id: string): Observable<Usuario | undefined> {
    return this.firestore.collection<Usuario>(this.collectionName).doc(id).valueChanges();
  }

  /**
   * Update a user by ID
   * @param id User ID
   * @param datos Partial data to update
   * @returns Promise<void>
   */
  actualizarUsuario(id: string, datos: Partial<Usuario>): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).update(datos);
  }

  /**
   * Delete a user by ID
   * @param id User ID
   * @returns Promise<void>
   */
  eliminarUsuario(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }

  /**
   * Reset password for a given email
   * @param email Email for password reset
   * @returns Promise<void>
   */
  async resetPassword(email: string): Promise<void> {
    await this.afAuth.sendPasswordResetEmail(email);
  }
}
