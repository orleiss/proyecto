import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-historial',
  templateUrl: './modal-historial.component.html',
  styleUrls: ['./modal-historial.component.css']
})
export class ModalHistorialComponent implements OnInit {

    todoForm: FormGroup;
    constructor(private formBuilder: FormBuilder,
      public activeModal: NgbActiveModal) { }
      
    
      ngOnInit() {
        this.todoForm = this.formBuilder.group({
          Nombre: ['', Validators.required],
          Apellido: ['', Validators.required],
          Teléfono: ['', Validators.required],
          Identificación: ['', Validators.required],
          Sexo: ['', Validators.required],
          inputSangre: ['', Validators.required],
          Sede: ['', Validators.required],
          inputFecha: ['', Validators.required],
          inputCodigo: ['', Validators.required],
          inputCodigoHistorial: ['', Validators.required],
          Ocupacion: ['', Validators.required],
          Alergias: ['', Validators.required],
          Observaciones: ['', Validators.required],
          Diagnostico: ['', Validators.required],

         
        });
      }
}