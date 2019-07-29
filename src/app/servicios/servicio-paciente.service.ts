import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { RegistroMedico } from '../modelo/RegistroMedico.model';
import { HistorialMedico } from '../modelo/HistorialMedico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioPacienteService {
  data: any;
  json1: any;
  json2: any;
  constructor(private firestore: AngularFirestore) { }

  insertarRegistroMedico(registro: RegistroMedico) {
    //const id = this.firestore.createId();
    /*this.data = {
      diagnostico: registro.getDiagnostico,
      estado: registro.getEstado,
      fecha: registro.getFecha,
      observaciones: registro.getObservaciones,
      paciente: {

      }
    }*/

    this.json1 = JSON.stringify(registro);
    this.json2 = JSON.parse(this.json1);

    console.log(this.json2);
    this.firestore.collection("registrosPendientes").add(this.json2)
      .then((docRef) => {
        //console.log(docRef.id);
      });
  }

  insertarHistorialMedico(historial: HistorialMedico) {
    this.json1 = JSON.stringify(historial);
    this.json2 = JSON.parse(this.json1);
    let id: string = historial.getIdentificacion.toString();
    //console.log(this.json2);

    this.firestore.collection("historialesMedicos").doc(id).set(this.json2)
      .then((docRef) => {
        //console.log(docRef.id);
      });
  }

  consultarHistorialMedico(id: string): any {
    let historial = new HistorialMedico();
    //return this.firestore.collection("historialesMedicos").doc(id).valueChanges()
    this.firestore.collection("historialesMedicos").doc(id)
      .get().toPromise().then((doc) => {
        if (doc.exists) {
          let res = doc.data();
          historial.setFecha = res.fecha;
          historial.setIdentificacion = res.identificacion;
          historial.setNombre = res.nombre;
          historial.setOcupacion = res.ocupacion;
          historial.setSexo = res.sexo;
          historial.setHistorial = res.historial;
          
        }
        else {

        }
      });
  }

  
}
