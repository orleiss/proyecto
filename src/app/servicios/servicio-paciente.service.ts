import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { RegistroMedico } from '../modelo/RegistroMedico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioPacienteService {
  data: any;
  json1: any;
  json2: any;
  constructor(private firestore: AngularFirestore) { }

  insertarRegistroMedico(registro: RegistroMedico){
    //const id = this.firestore.createId();
    this.data = {
      diagnostico: registro.getDiagnostico,
      estado: registro.getEstado,
      fecha: registro.getFecha,
      observaciones: registro.getObservaciones,
      paciente: {

      }
    }

    this.json1 = JSON.stringify(registro);
    this.json2 = JSON.parse(this.json1);
    
    console.log(this.json2);
    this.firestore.collection("registrosPendientes").add(this.json2)
    .then((docRef)=>{
      //console.log(docRef.id);
    });
  } 

}
