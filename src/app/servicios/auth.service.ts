import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of} from 'rxjs';
import { switchMap, startWith, tap, filter } from 'rxjs/operators';
import { PersonalMedico } from 'src/app/modelos/PersonalMedico.model'

interface User {
  uid: string;
  photoURL?: string;
  displayName?: string;
  sede?: string;
  rol?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User | null>;
  authState: any = null;

  constructor(public afAuth: AngularFireAuth, private router: Router, private afs: AngularFirestore) { 
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.authState = user;
          return this.afs.doc<User>(`usuarios/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  loginGoogle(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(credentials =>{
      this.getDataUser(credentials.user.uid);
    });
    
  }

  getDataUser(uid: String){
    let data : string = String(uid);
    //const userRef: AngularFirestoreDocument<User> = this.afs.doc(`PersonalMedico/${data}`);
    var doc = this.afs.collection("usuarios").doc(data);

    doc.valueChanges().subscribe((user)=>{
      if (!(user === undefined)) {
        console.log("Esta autenticado :v"); //aqui redirecciona
      } else {
        console.log("No esta autenticado :'v");
        this.logout();
      }
      
   });
    

  }
  
  logout(){
    this.afAuth.auth.signOut();
  }



}
