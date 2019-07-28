import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioPacienteService } from 'src/app/servicios/servicio-paciente.service';
import { NgForm } from '@angular/forms';
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
  
  paciente = new Paciente();
  estudiante = new Estudiante();
  empleado = new Empleado();
  registro = new RegistroMedico();

  data = {
    nombre:'',
    apellido:'',
    telefono:'',
    identificacion:'',
    sexo:'',
    tipoSangre:'',
    sede:'',
    fechaNacimiento:'',
    tipoPaciente:'',
    codigo:'',
    programa:'',
    semestre:'',
    cargo:'',
    alergias:'',
    diagnostico:'',
    observaciones:''
    
  }

  constructor(private router: Router , private service: ServicioPacienteService) {
    
  }


  ngOnInit() {
  }

  enviarDatos(datos: NgForm){

      if(this.data.tipoPaciente == "Estudiante"){
        this.estudiante.setNombre = this.data.nombre;
        this.estudiante.setApellido = this.data.apellido;
        this.estudiante.setTelefono = parseInt(this.data.telefono);
        this.estudiante.setIdentificacion = parseInt(this.data.identificacion);
        this.estudiante.setSexo = this.data.sexo;
        this.estudiante.setTipoSangre = this.data.tipoSangre;
        this.estudiante.setSede = this.data.sede;
        this.estudiante.setFechaNacimiento = new Date(this.data.fechaNacimiento);
  
        this.estudiante.setCodigo = parseInt(this.data.codigo);
        this.estudiante.setPrograma = this.data.programa;
        this.estudiante.setSemestre = parseInt(this.data.semestre);
        this.estudiante.setAlergias = this.data.alergias;
  
        this.registro.setPaciente = this.estudiante;
      }
      else if(this.data.tipoPaciente == "Empleado") {
        this.empleado.setNombre = this.data.nombre;
        this.empleado.setApellido = this.data.apellido;
        this.empleado.setTelefono = parseInt(this.data.telefono);
        this.empleado.setIdentificacion = parseInt(this.data.identificacion);
        this.empleado.setSexo = this.data.sexo;
        this.empleado.setTipoSangre = this.data.tipoSangre;
        this.empleado.setSede = this.data.sede;
        this.empleado.setFechaNacimiento = new Date(this.data.fechaNacimiento);
  
        this.empleado.setCodigo = parseInt(this.data.codigo);
        this.empleado.setAlergias = this.data.alergias;
        this.empleado.setCargo = this.data.cargo;  
        
        this.registro.setPaciente = this.empleado;
      }
        
      this.registro.setObservaciones = this.data.observaciones;
      this.registro.setDiagnostico = this.data.diagnostico;
      this.registro.setFecha = new Date();
      this.registro.setEstado = "Sin anexar";
            
      console.log(this.registro);

      this.service.insertarRegistroMedico(this.registro);
    

  }

  cancelar(){
    this.router.navigateByUrl('/home');
  }
  
}
