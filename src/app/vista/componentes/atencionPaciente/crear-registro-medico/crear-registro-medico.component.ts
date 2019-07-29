import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgForm, FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Paciente } from 'src/app/modelo/Paciente.model';
import { Estudiante } from 'src/app/modelo/Estudiante.model';
import { Empleado } from 'src/app/modelo/Empleado.model';
import { RegistroMedico } from 'src/app/modelo/RegistroMedico.model';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlmacenamientoPersistente } from 'src/app/modelo/AlmacenamientoPersistente.model';
import { ServicioPacienteService } from 'src/app/servicios/servicio-paciente.service';
import { PersonalMedico } from 'src/app/modelo/PersonalMedico.model';

@Component({
  selector: 'app-crear-registro-medico',
  templateUrl: './crear-registro-medico.component.html',
  styleUrls: ['./crear-registro-medico.component.css']
})
export class CrearRegistroMedicoComponent implements OnInit {

  tipoPaciente: string = '';
  paciente = new Paciente();
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
  nombrePersonal: string;
  personal: any;
  
  constructor(public formBuild: FormBuilder, private router: Router, private authS: AuthService, private service: ServicioPacienteService) {
    this.authS.user.subscribe((u)=>{
      if(u){
        this.personal = JSON.parse(JSON.stringify(u));
        this.nombrePersonal = this.personal.nombre+ ' ' + this.personal.apellido;
      }
    });

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
    this.crearRegistroMedico();
  }

  crearRegistroMedico(){
    
    let estudiante = new Estudiante();
    let empleado = new Empleado();
    let registro = new RegistroMedico();

      if (this.tipoPaciente == "Estudiante") {
        if(this.myForm.valid){
          estudiante.setNombre = this.myForm.value.nombre;
          estudiante.setApellido = this.myForm.value.apellido;
          estudiante.setTelefono = parseInt(this.myForm.value.telefono);
          estudiante.setIdentificacion = parseInt(this.myForm.value.identificacion);
          estudiante.setSexo = this.myForm.value.sexo;
          estudiante.setTipoSangre = this.myForm.value.tipoSangre;
          estudiante.setSede = this.myForm.value.sede;
          estudiante.setFechaNacimiento = new Date(this.myForm.value.fechaNacimiento);
    
          estudiante.setCodigo = parseInt(this.myForm.value.codigo);
          estudiante.setPrograma = this.myForm.value.programa;
          estudiante.setSemestre = parseInt(this.myForm.value.semestre);
          estudiante.setAlergias = this.myForm.value.alergias;
    
          registro.setPaciente = estudiante;
    
          registro.setObservaciones = this.myForm.value.observaciones;
          registro.setDiagnostico = this.myForm.value.diagnostico;
          registro.setFecha = new Date();
          registro.setEstado = "Sin anexar";
          registro.setOcupacion = this.tipoPaciente;
          registro.setNombrePersonalMedico = this.nombrePersonal

          console.log(this.nombrePersonal);
          //this.service.insertarRegistroMedico(this.registro);
        
          //console.log(this.myForm.value);
          //console.log(this.myForm.valid);
          
          let almacenamiento = new AlmacenamientoPersistente(this.service);
          almacenamiento.insertarRegistroMedico(registro);

          alert("Formulario enviado con exito");

          //delete this.registro;
                    
          this.resetForm(this.myForm);
        }
        else{
          alert("Formulario invalido");
        }
    }
    else if (this.tipoPaciente == "Empleado") {
        if(this.myForm2.valid){
          empleado.setNombre = this.myForm2.value.nombre;
          empleado.setApellido = this.myForm2.value.apellido;
          empleado.setTelefono = parseInt(this.myForm2.value.telefono);
          empleado.setIdentificacion = parseInt(this.myForm2.value.identificacion);
          empleado.setSexo = this.myForm2.value.sexo;
          empleado.setTipoSangre = this.myForm2.value.tipoSangre;
          empleado.setSede = this.myForm2.value.sede;
          empleado.setFechaNacimiento = this.myForm2.value.fechaNacimiento;

          empleado.setCodigo = parseInt(this.myForm2.value.codigo);
          empleado.setAlergias = this.myForm2.value.alergias;
          empleado.setCargo = this.myForm2.value.cargo;

          registro.setPaciente = empleado;

          registro.setObservaciones = this.myForm2.value.observaciones;
          registro.setDiagnostico = this.myForm2.value.diagnostico;
          registro.setFecha = new Date();
          registro.setEstado = "Sin anexar";
          registro.setOcupacion = this.tipoPaciente;
          registro.setNombrePersonalMedico = this.nombrePersonal;
          
          //console.log(this.myForm2.value);
          //console.log(this.myForm2.valid);
          let almacenamiento = new AlmacenamientoPersistente(this.service);
          almacenamiento.insertarRegistroMedico(registro);

          alert("Registro médico creado con exito");

          this.resetForm(this.myForm2);
        }
        else{
          alert("No se pudo crear el registro médico");
        }
    }
  }

  resetForm(form: FormGroup) {
    form.reset();
  }

  cancelar() {
    this.router.navigateByUrl('/home');
  }

}
