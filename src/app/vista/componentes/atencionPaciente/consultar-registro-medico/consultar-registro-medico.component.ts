import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal-formulario-registro/modal.component';

@Component({
  selector: 'app-consultar-registro-medico',
  templateUrl: './consultar-registro-medico.component.html',
  styleUrls: ['./consultar-registro-medico.component.css']
})
export class ConsultarRegistroMedicoComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  clickAddtodo(){
    const modal = this.modalService.open(ModalComponent);
    modal.result.then(
    this.handleModalTodoFormClose.bind(this),
    this.handleModalTodoFormClose.bind(this)
    )
  }

  handleModalTodoFormClose(){
    alert('Estas cerrando el Registro Médico');
  }

}