import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Hora } from '../Interfaces/horafecha';  // Ajusta la ruta si es necesario
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseFechaService {
  private collectionName = 'horas';  // Nombre de la colección en Firestore

  constructor(private firestore: AngularFirestore) {}

  /**
   * Crear un nuevo registro de hora
   * @param hora El objeto de tipo Hora a guardar
   * @returns Promise<void>
   */
  async crearHora(hora: Hora): Promise<void> {
    const id = this.firestore.createId(); // Genera un ID único
    return this.firestore
      .collection(this.collectionName)
      .doc(id)
      .set({ ...hora, id });  // Asigna el ID al registro
  }

  /**
   * Obtener todos los registros de horas
   * @returns Observable<Hora[]> Observable con la lista de registros
   */
  obtenerHoras(): Observable<Hora[]> {
    return this.firestore.collection<Hora>(this.collectionName).valueChanges();
  }

  /**
   * Obtener un registro de hora por ID
   * @param id ID de la hora
   * @returns Observable<Hora | undefined> Observable con el registro o undefined si no existe
   */
  obtenerHoraPorId(id: string): Observable<Hora | undefined> {
    return this.firestore.collection<Hora>(this.collectionName).doc(id).valueChanges();
  }

  /**
   * Actualizar un registro de hora
   * @param id ID del registro de hora
   * @param datos Datos a actualizar
   * @returns Promise<void>
   */
  actualizarHora(id: string, datos: Partial<Hora>): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).update(datos);
  }

  /**
   * Eliminar un registro de hora por ID
   * @param id ID del registro de hora
   * @returns Promise<void>
   */
  eliminarHora(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
