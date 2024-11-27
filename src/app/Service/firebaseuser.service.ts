import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseUserService {
  private collectionName = 'usuarios';

  constructor(private firestore: AngularFirestore) {}

  // Crear un nuevo usuario con ID automático
  crearUsuario(usuario: User): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore
      .collection(this.collectionName)
      .doc(id)
      .set({ ...usuario, id });
  }

  // Obtener todos los usuarios
  obtenerUsuarios(): Observable<User[]> {
    return this.firestore
      .collection<User>(this.collectionName)
      .valueChanges();
  }

  // Obtener un usuario por su ID
  obtenerUsuarioPorId(id: string): Observable<User | undefined> {
    return this.firestore
      .collection<User>(this.collectionName)
      .doc(id)
      .valueChanges();
  }

  // Actualizar un usuario
  actualizarUsuario(id: string, datos: Partial<User>): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).update(datos);
  }

  // Eliminar un usuario
  eliminarUsuario(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
