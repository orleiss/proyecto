import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { RegistroMedico } from '../modelo/RegistroMedico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioPacienteService {
  data: any;
  constructor(private firestore: AngularFirestore) { }

  insertarRegistroMedico(registro: RegistroMedico){
    //const id = this.firestore.createId();
    this.data = {
      diagnostico: registro.getDiagnostico,
      estado: registro.getEstado,
      fecha: registro.getFecha,
      observaciones: registro.getObservaciones,
      //paciente: registro.getPaciente
    }

    //this.data = JSON.stringify(registro);
    console.log(this.data);
    this.firestore.collection("registrosPendientes").add(this.data)
    .then((docRef)=>{
      console.log(docRef.id);
    });
  } 

}
