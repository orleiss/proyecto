import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

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
          Alergias: ['', Validators.required],
          Observaciones: ['', Validators.required],
          Diagnostico: ['', Validators.required],
         
        });
      }
}