import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap, startWith, tap, filter } from 'rxjs/operators';
import { PersonalMedico } from 'src/app/modelos/PersonalMedico.model'

interface User {
  uid: string;
  nombre: string;
  apellido: string;
  sede: string;
  ocupacion: string;
  genero: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User | null>;
  usuario: PersonalMedico;
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
    this.usuario = new PersonalMedico();
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
        console.log("Document data:", docc.data());
        this.usuario.setOcupacion = "Un medico :'v";
        this.router.navigate(['/home']);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
    
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigateByUrl("https://mail.google.com/mail/u/0/?logout&hl=en");
      this.router.navigate(['/']);
    });
  }



}
