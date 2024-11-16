import { user } from './../models/user.model';
import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword  } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);


  // ================= AUTENTICACION ================//


  // Acceder
  signIn(user: user) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

}
