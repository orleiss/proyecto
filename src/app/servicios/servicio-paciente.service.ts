import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicioPacienteService {

  constructor(private firestore: AngularFirestore) { }

  insertarRegistroMedico(){
    const id = this.firestore.createId();
    this.firestore.collection("registrosPendientes").add({
      name: "Yo"
    })
    .then((docRef)=>{
      console.log(docRef.id);
    });
  } 

}
