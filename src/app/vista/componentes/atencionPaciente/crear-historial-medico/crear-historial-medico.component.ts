import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HistorialMedico } from 'src/app/modelo/HistorialMedico.model';
import { ServicioPacienteService } from 'src/app/servicios/servicio-paciente.service';
import { AlmacenamientoPersistente } from 'src/app/modelo/AlmacenamientoPersistente.model';

@Component({
  selector: 'app-crear-historial-medico',
  templateUrl: './crear-historial-medico.component.html',
  styleUrls: ['./crear-historial-medico.component.css']
})
export class CrearHistorialMedicoComponent implements OnInit {

  myForm: FormGroup;
  historial = new HistorialMedico();

  constructor(public formBuild: FormBuilder, private service: ServicioPacienteService) {
    this.myForm = formBuild.group({
      nombre: ['', [Validators.required, Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]+"), Validators.minLength(4)],],
      apellido: ['', [Validators.required, Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]+"), Validators.minLength(4)],],
      identificacion: ['', [Validators.required, Validators.pattern("[0-9]{10}")],],
      sexo: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      ocupacion: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  compruebaCampos(){
    if(this.myForm.valid){
      this.crearHistorialMedico();
    }
    else{
      alert("No se pudo crear el historial médico");
    }
  }

  crearHistorialMedico(){
    let almacenamiento = new AlmacenamientoPersistente(this.service);
    let encontrado = almacenamiento.consultarHistorialMedico(this.myForm.value.identificacion);
    
    this.historial.setNombre = this.myForm.value.nombre + ' ' + this.myForm.value.apellido;
      this.historial.setSexo = this.myForm.value.sexo;
      this.historial.setIdentificacion = this.myForm.value.identificacion;
      this.historial.setOcupacion = this.myForm.value.ocupacion;
      this.historial.setFecha = this.myForm.value.fechaNacimiento;
      
      almacenamiento.insertarHistorialMedico(this.historial);

      alert("Historial médico creado con exito");

    /*console.log(encontrado);
    if(encontrado == false){
      //console.log("Siga we");
      this.historial.setNombre = this.myForm.value.nombre + ' ' + this.myForm.value.apellido;
      this.historial.setSexo = this.myForm.value.sexo;
      this.historial.setIdentificacion = this.myForm.value.identificacion;
      this.historial.setOcupacion = this.myForm.value.ocupacion;
      this.historial.setFecha = this.myForm.value.fechaNacimiento;
      
      almacenamiento.insertarHistorialMedico(this.historial);

      alert("Historial médico creado con exito");
    }
    else{
      alert("Ya se encuentra un historial médico relacionado");
    }*/
    
    //this.resetForm(this.myForm);
  }

  resetForm(form: FormGroup) {
    form.reset();
  }

}
