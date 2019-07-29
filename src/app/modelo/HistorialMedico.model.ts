import { RegistroMedico } from './RegistroMedico.model';

export class HistorialMedico{

    private codigo: number;
    private fecha: Date;
    private historial= Array<RegistroMedico>();
    private identificacion: number;
    private nombre: string;
    private sexo: string;
    private ocupacion: string;

    public get getCodigo():number{
        return this.codigo;
    }

    public get getFecha():Date{
        return this.fecha;
    }

    public get getHistorial(): Array<RegistroMedico>{
        return this.historial;
    }

    public get getIdentificacion():number{
        return this.identificacion;
    }

    public get getNombre(): string{
        return this.nombre;
    }

    public get getSexo(): string{
        return this.sexo;
    }

    public get getOcupacion(): string{
        return this.ocupacion;
    }

    public set setCodigo(newCodigo:number){
        this.codigo=newCodigo;
    }

    public set setFecha(newFecha:Date){
        this.fecha=newFecha;
    }

    public set setHistorial(newRegistrosMedicos : Array<RegistroMedico> ){
        this.historial=newRegistrosMedicos;
    }

    public set setIdentificacion(newIdPaciente:number){
        this.identificacion=newIdPaciente;
    }

    public set setNombre(newNombre: string){
        this.nombre = newNombre;
    }

    public set setSexo(newSexo: string){
        this.sexo = newSexo;
    }

    public set setOcupacion(newOcupacion: string){
        this.ocupacion = newOcupacion;
    }

}