import { ServicioPacienteService } from 'src/app/servicios/servicio-paciente.service';
import { RegistroMedico } from './RegistroMedico.model';
import { HistorialMedico } from './HistorialMedico.model';

export class AlmacenamientoPersistente{
    flag: string;
    constructor(private service: ServicioPacienteService){

    }

    public insertarRegistroMedico(registro: RegistroMedico){
        this.service.insertarRegistroMedico(registro);
    }

    public insertarHistorialMedico(historial: HistorialMedico){
        this.service.insertarHistorialMedico(historial);
    }

    public consultarHistorialMedico(identificacion: number): any{
        let id: string = identificacion.toString();
        
        this.flag = '';
        this.service.consultarHistorialMedico(id)/*.subscribe((res)=>{
          console.log(res);
          if(res !== undefined){
            
            alert()
            this.flag = '.';
          }
        });
        //console.log(historial);
        console.log(this.flag);
        return (this.flag == '.') ? true : false ;*/
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