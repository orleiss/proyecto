import { RegistroMedico } from './RegistroMedico.model';

export class HistorialMedico{

    private codigo: number;
    private fecha: Date;
    private historial= Array<RegistroMedico>();
    private idPaciente: number;
    private idPersonalMedico: number;


    public consultar():void{


    }

    public get getCodigo():number{
        return this.codigo;
    }

    public get getFecha():Date{
        return this.fecha;
    }

    public get getHistorial(): Array<RegistroMedico>{
        return this.historial;
    }

    public get getIdPaciente():number{
        return this.idPaciente;
    }

    public get getIdPersonalMedico(): number{
        return this.idPersonalMedico;
    }

    public guardar():void{

    }

    public set setCodigo(newCodigo:number){
        this.codigo=newCodigo;
    }

    public set setHistorial(newRegistrosMedicos : Array<RegistroMedico> ){
        this.historial=newRegistrosMedicos;
    }

    public set setIdPaciente(newIdPaciente:number){
        this.idPaciente=newIdPaciente;
    }
}