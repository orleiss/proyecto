import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgForm, FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Paciente } from 'src/app/modelo/Paciente.model';
import { Estudiante } from 'src/app/modelo/Estudiante.model';
import { Empleado } from 'src/app/modelo/Empleado.model';
import { RegistroMedico } from 'src/app/modelo/RegistroMedico.model';

@Component({
  selector: 'app-crear-registro-medico',
  templateUrl: './crear-registro-medico.component.html',
  styleUrls: ['./crear-registro-medico.component.css']
})
export class CrearRegistroMedicoComponent implements OnInit {

  tipoPaciente: string = '';
  paciente = new Paciente();
  estudiante = new Estudiante();
  empleado = new Empleado();
  registro = new RegistroMedico();
/*
  data = {
    nombre: '',
    apellido: '',
    telefono: '',
    identificacion: '',
    sexo: '',
    tipoSangre: '',
    sede: '',
    fechaNacimiento: '',
    tipoPaciente: '',
    codigo: '',
    programa: '',
    semestre: '',
    cargo: '',
    alergias: '',
    diagnostico: '',
    observaciones: ''

  }
*/
  myForm: FormGroup;
  myForm2: FormGroup;

  constructor(public formBuild: FormBuilder, private router: Router) {
    this.myForm = formBuild.group({
      nombre: ['', [Validators.required, Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]+"), Validators.minLength(4)],],
      apellido: ['', [Validators.required, Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]+"), Validators.minLength(4)],],
      telefono: ['', [Validators.required, Validators.pattern("[0-9]{6,10}")],],
      identificacion: ['', [Validators.required, Validators.pattern("[0-9]{10}")],],
      sexo: ['', [Validators.required]],
      tipoSangre: ['', [Validators.required]],
      sede: ['', [Validators.required, Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]+"), Validators.minLength(4)],],
      fechaNacimiento: ['', [Validators.required]], //,CustomValidators.dateMinimum('2018-12-12')
      codigo: ['', [Validators.required, Validators.pattern("[0-9]{4,}")],],
      programa: ['', [Validators.required, Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]+"), Validators.minLength(4)],],
      semestre: ['', [Validators.required, Validators.pattern("[0-9]{1,2}"), Validators.min(1), Validators.max(10)],],
      alergias: ['', [Validators.required]],
      diagnostico: ['', [Validators.required]],
      observaciones: ['', [Validators.required]],
    });
    this.myForm2 = formBuild.group({
      nombre: ['', [Validators.required, Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]+"), Validators.minLength(4)],],
      apellido: ['', [Validators.required, Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]+"), Validators.minLength(4)],],
      telefono: ['', [Validators.required, Validators.pattern("[0-9]{6,10}")],],
      identificacion: ['', [Validators.required, Validators.pattern("[0-9]{10}")],],
      sexo: ['', [Validators.required]],
      tipoSangre: ['', [Validators.required]],
      sede: ['', [Validators.required, Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]+"), Validators.minLength(4)],],
      fechaNacimiento: ['', [Validators.required]], //,CustomValidators.dateMinimum('2018-12-12')
      codigo: ['', [Validators.required, Validators.pattern("[0-9]{4,}")],],
      cargo: ['', [Validators.required, Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]+"), Validators.minLength(4)],],
      alergias: ['', [Validators.required]],
      diagnostico: ['', [Validators.required]],
      observaciones: ['', [Validators.required]],
    });
  }


  ngOnInit() {
  }

  enviarDatos() {
    
    if (this.tipoPaciente == "Estudiante") {
        if(this.myForm.valid){
          this.estudiante.setNombre = this.myForm.value.nombre;
          this.estudiante.setApellido = this.myForm.value.apellido;
          this.estudiante.setTelefono = parseInt(this.myForm.value.telefono);
          this.estudiante.setIdentificacion = parseInt(this.myForm.value.identificacion);
          this.estudiante.setSexo = this.myForm.value.sexo;
          this.estudiante.setTipoSangre = this.myForm.value.tipoSangre;
          this.estudiante.setSede = this.myForm.value.sede;
          this.estudiante.setFechaNacimiento = new Date(this.myForm.value.fechaNacimiento);
    
          this.estudiante.setCodigo = parseInt(this.myForm.value.codigo);
          this.estudiante.setPrograma = this.myForm.value.programa;
          this.estudiante.setSemestre = parseInt(this.myForm.value.semestre);
          this.estudiante.setAlergias = this.myForm.value.alergias;
    
          this.registro.setPaciente = this.estudiante;
    
          this.registro.setObservaciones = this.myForm.value.observaciones;
          this.registro.setDiagnostico = this.myForm.value.diagnostico;
          this.registro.setFecha = new Date();
          this.registro.setEstado = "Sin anexar";
          this.registro.setOcupacion = this.tipoPaciente;
    
          //this.service.insertarRegistroMedico(this.registro);
        
          //console.log(this.myForm.value);
          console.log(this.myForm.valid);
          this.resetForm(this.myForm);
        }
        else{
          alert("Formulario invalido");
        }
    }
    else if (this.tipoPaciente == "Empleado") {
        if(this.myForm2.valid){
          this.empleado.setNombre = this.myForm2.value.nombre;
          this.empleado.setApellido = this.myForm2.value.apellido;
          this.empleado.setTelefono = parseInt(this.myForm2.value.telefono);
          this.empleado.setIdentificacion = parseInt(this.myForm2.value.identificacion);
          this.empleado.setSexo = this.myForm2.value.sexo;
          this.empleado.setTipoSangre = this.myForm2.value.tipoSangre;
          this.empleado.setSede = this.myForm2.value.sede;
          this.empleado.setFechaNacimiento = new Date(this.myForm2.value.fechaNacimiento);

          this.empleado.setCodigo = parseInt(this.myForm2.value.codigo);
          this.empleado.setAlergias = this.myForm2.value.alergias;
          this.empleado.setCargo = this.myForm2.value.cargo;

          this.registro.setPaciente = this.empleado;

          this.registro.setObservaciones = this.myForm2.value.observaciones;
          this.registro.setDiagnostico = this.myForm2.value.diagnostico;
          this.registro.setFecha = new Date();
          this.registro.setEstado = "Sin anexar";
          this.registro.setOcupacion = this.tipoPaciente;

              
         //console.log(this.myForm2.value);
          console.log(this.myForm2.valid);

          this.resetForm(this.myForm2);
        }
        else{
          alert("Formulario invalido");
        }
    }

  }

  crearRegistroMedico(registro: RegistroMedico){

  }

  resetForm(form: FormGroup) {
    form.reset();
  }

  cancelar() {
    this.router.navigateByUrl('/home');
  }

}
