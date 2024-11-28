import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Asistencia } from '.././Interfaces/alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAsigService {
  private collectionName = 'asistencias';

  constructor(private firestore: AngularFirestore) {}

  // Crear un nuevo registro de asistencia
  registrarAsistencia(asistencia: Asistencia): Promise<void> {
    const id = this.firestore.createId(); // Genera un ID único para la asistencia
    return this.firestore
      .collection(this.collectionName)
      .doc(id)
      .set({ ...asistencia, id }); // Asigna el ID al registro
  }

  // Obtener todas las asistencias
  obtenerAsistencias(): Observable<Asistencia[]> {
    return this.firestore.collection<Asistencia>(this.collectionName).valueChanges();
  }

  // Obtener asistencia por ID
  obtenerAsistenciaPorId(id: string): Observable<Asistencia | undefined> {
    return this.firestore
      .collection<Asistencia>(this.collectionName)
      .doc(id)
      .valueChanges();
  }

  // Actualizar un registro de asistencia
  actualizarAsistencia(id: string, datos: Partial<Asistencia>): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).update(datos);
  }

  // Eliminar un registro de asistencia
  eliminarAsistencia(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
