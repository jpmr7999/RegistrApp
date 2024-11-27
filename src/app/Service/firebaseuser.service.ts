import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Usuario } from './../Interfaces/usuariolog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseUserService {
  private collectionName = 'usuarios';

  constructor(private firestore: AngularFirestore) {}

  // Crear un nuevo usuario con ID automático
  crearUsuario(usuario: Usuario): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore
      .collection(this.collectionName)
      .doc(id)
      .set({ ...usuario, id });
  }

  // Obtener todos los usuarios
  obtenerUsuarios(): Observable<Usuario[]> {
    return this.firestore
      .collection<Usuario>(this.collectionName)
      .valueChanges();
  }

  // Obtener un usuario por su ID
  obtenerUsuarioPorId(id: string): Observable<Usuario | undefined> {
    return this.firestore
      .collection<Usuario>(this.collectionName)
      .doc(id)
      .valueChanges();
  }

  // Actualizar un usuario
  actualizarUsuario(id: string, datos: Partial<Usuario>): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).update(datos);
  }

  // Eliminar un usuario
  eliminarUsuario(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
