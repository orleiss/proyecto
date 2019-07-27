import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioPacienteService } from 'src/app/servicios/servicio-paciente.service';
import { NgForm } from '@angular/forms';
import { Paciente } from 'src/app/modelo/Paciente.model';

@Component({
  selector: 'app-crear-registro-medico',
  templateUrl: './crear-registro-medico.component.html',
  styleUrls: ['./crear-registro-medico.component.css']
})
export class CrearRegistroMedicoComponent implements OnInit {
  
  paciente = new Paciente();

  constructor( private router: Router , private service: ServicioPacienteService) {
    
  }


  ngOnInit() {
  }

  enviarDatos(datos: NgForm){
    //this.service.insertarRegistroMedico();
    this.paciente.getNombre
  }

  cancelar(){
    this.router.navigateByUrl('/home');
  }
  
}
