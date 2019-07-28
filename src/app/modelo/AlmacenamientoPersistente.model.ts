import { ServicioPacienteService } from 'src/app/servicios/servicio-paciente.service';
import { RegistroMedico } from './RegistroMedico.model';

export class AlmacenamientoPersistente{
    constructor(private service: ServicioPacienteService){

    }

    insertarRegistroMedico(registro: RegistroMedico){
        this.service.insertarRegistroMedico(registro);
    }

}