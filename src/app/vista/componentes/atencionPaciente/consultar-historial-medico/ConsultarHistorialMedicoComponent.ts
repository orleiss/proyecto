import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalHistorialComponent } from '../modal-formulario-historial/modal-historial.component';
@Component({
  selector: 'app-consultar-historial-medico',
  templateUrl: './consultar-historial-medico.component.html',
  styleUrls: ['./consultar-historial-medico.component.css']
})
export class ConsultarHistorialMedicoComponent implements OnInit {
  constructor(private modalService: NgbModal) { }
  ngOnInit() {
  }
  clickAddtodo2() {
    const modal = this.modalService.open(ModalHistorialComponent);
    modal.result.then(this.handleModalTodoFormClose.bind(this), this.handleModalTodoFormClose.bind(this));
  }
  handleModalTodoFormClose() {
    alert('Estas cerrando el Historial Médico');
  }
}
