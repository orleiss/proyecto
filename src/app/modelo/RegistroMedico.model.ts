import { Paciente } from './Paciente.model';
import { PersonalMedico } from './PersonalMedico.model';

export class RegistroMedico {
    private codigo: number;
    private diagnostico: string;
    private estado: string;
    private fecha: Date;
    private observaciones:string;
    private paciente:Paciente;
    private nombrePersonalMedico: string;
    private ocupacion: string;

    public get getCodigo():number{
        return this.codigo;
    }

    public get getDiagnostico():string{
        return this.diagnostico;
    }

    public get getFecha():Date{
        return this.fecha;
    }

    public get getObservaciones():string{
        return this.observaciones;
    }

    public get getPaciente():Paciente{
        return this.paciente;
    }

    public get getNombrePersonaMedico():string{
        return this.nombrePersonalMedico;
    }

    public get getOcupacion(): string{
        return this.ocupacion;
    }

    public set setCodigo(newCodigo:number){
        this.codigo=newCodigo;
    }

    public set setDiagnostico(newDiagnostico:string){
        this.diagnostico=newDiagnostico;
    }

    public set setFecha(newFecha: Date){
        this.fecha=newFecha;
    }

    public set setObservaciones(newObservaciones:string){
        this.observaciones=newObservaciones;
    }

    public set setPaciente(newPaciente:Paciente){
        this.paciente=newPaciente;
    }

    public set setNombrePersonalMedico(newPersonalMedico: string){
        this.nombrePersonalMedico=newPersonalMedico;
    }

    public get getEstado(): string{
        return this.estado;
    }

    public set setEstado(newEstado:string){
        this.estado=newEstado;
    }

    public set setOcupacion(newOcupacion: string){
        this.ocupacion = newOcupacion;
    }

}