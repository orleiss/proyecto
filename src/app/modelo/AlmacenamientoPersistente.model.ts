import { ServicioPacienteService } from 'src/app/servicios/servicio-paciente.service';
import { RegistroMedico } from './RegistroMedico.model';
import { HistorialMedico } from './HistorialMedico.model';

export class AlmacenamientoPersistente{
    
    constructor(private service: ServicioPacienteService){}

    public insertarRegistroMedico(registro: RegistroMedico){
        this.service.insertarRegistroMedico(registro);
    }

    public insertarHistorialMedico(historial: HistorialMedico){
        this.service.insertarHistorialMedico(historial);
    }

    public consultarHistorialMedico(identificacion: number): HistorialMedico{
        let id: string = identificacion.toString();
        let historial = this.service.consultarHistorialMedico(id);
        console.log("->"+historial);
        return historial;
    }
    
}