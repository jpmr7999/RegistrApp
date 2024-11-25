import { inject, Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { ModalController, ModalOptions } from '@ionic/angular';  // Importamos ModalController
import { Asignaturas } from '../pages/Interfaces/asignatuta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  modalCtrl = inject(ModalController);

  constructor(private firestore: Firestore) { }

  // Funcionalidad de agregar asignaturas
  agregarAsignatura(asignatura: Asignaturas) {
    const asignaturaRef = collection(this.firestore, 'asignaturas');
    return addDoc(asignaturaRef, asignatura);
  }

  // Obtener las asignaturas
  getAsignatura(): Observable<Asignaturas[]> {
    const asignaturaRef = collection(this.firestore, 'asignaturas');
    return collectionData(asignaturaRef, { idField: 'id' }) as Observable<Asignaturas[]>;
  }

  // Eliminar una asignatura
  eliminarAsignatura(asignatura: Asignaturas) {
    const asignaturaDocRef = doc(this.firestore, `asignaturas/${asignatura.id}`);
    return deleteDoc(asignaturaDocRef);
  }

  //modal AHORA SI PORFAVOR
  async presentModal(opts: ModalOptions) {
    const modal = await this.modalCtrl.create(opts);
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) return data;
  }

  dismissModal(data?: any) {
    return this.modalCtrl.dismiss(data);
  }
}
