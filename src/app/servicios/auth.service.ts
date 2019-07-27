import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap, startWith, tap, filter } from 'rxjs/operators';
import { PersonalMedico } from 'src/app/modelo/PersonalMedico.model'

interface User {
  uid: string;
  nombre: string;
  apellido: string;
  sede: string;
  ocupacion: string;
  sexo: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<PersonalMedico | null>;
  authState: any = null;
  prueba: string;

  constructor(public afAuth: AngularFireAuth, private router: Router, private afs: AngularFirestore) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.authState = user;
          return this.afs.doc<PersonalMedico>(`usuarios/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  get currentUser(): any {
    return this.afs.doc<PersonalMedico>(`usuarios/${this.authState.uid}`).valueChanges();
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(credentials => {
        this.getDataUser(credentials.user.uid);
      });  
    
  }

  getDataUser(uid: String) {
    let data: string = String(uid);
    //const userRef: AngularFirestoreDocument<User> = this.afs.doc(`PersonalMedico/${data}`);
    var doc = this.afs.collection("usuarios").doc(data);

    /*doc.valueChanges().subscribe((user) => {
      if (!(user === undefined)) {
        console.log("Esta autenticado :v"); //aqui redirecciona
      } else {
        console.log("No esta autenticado :'v");
        this.logout();
      }

    });*/
    
    doc.get().toPromise().then((docc)=> {
      if (docc.exists) {
        //console.log("Info:", docc.data());
        this.router.navigate(['/home']);
      } else {
        console.log("No hay info :'v");
      }
    }).catch(function (error) {
      console.log("Error al obtener info:", error);
    });
    
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigateByUrl("https://mail.google.com/mail/u/0/?logout&hl=en");
      this.router.navigate(['/']);
    });
  }



}
