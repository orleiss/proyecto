import { ServicioPacienteService } from 'src/app/servicios/servicio-paciente.service';
import { RegistroMedico } from './RegistroMedico.model';
import { HistorialMedico } from './HistorialMedico.model';
import { ThrowStmt } from '@angular/compiler';

export class AlmacenamientoPersistente{
    data = {
      fecha: '',
      identificacion:'',
      nombre:'',
      ocupacion:'',
      sexo:'',
      historial:[]
    }
    constructor(private service: ServicioPacienteService){}

    public insertarRegistroMedico(registro: RegistroMedico){
        this.service.insertarRegistroMedico(registro);
    }

    public insertarHistorialMedico(historial: HistorialMedico){
        this.service.insertarHistorialMedico(historial);
    }

    public consultarHistorialMedico(identificacion: number){
        let id: string = identificacion.toString();
        this.service.consultarHistorialMedico(id).subscribe((res)=>{
            
        });
    }
    /*
    private prueba(res): any{
      this.data = {
        fecha : res.fecha,
        identificacion: res.identificacion,
        nombre: res.nombre,
        ocupacion: res.ocupacion,
        sexo: res.sexo,
        historial: res.historial
      }
      console.log(this.data);
      return this.data;
    }*/

}