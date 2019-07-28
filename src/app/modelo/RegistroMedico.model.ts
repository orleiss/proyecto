import { Paciente } from './Paciente.model';
import { PersonalMedico } from './PersonalMedico.model';

export class RegistroMedico {
    private codigo: number;
    private diagnostico: string;
    private estado: string;
    private fecha: Date;
    private observaciones:string;
    private paciente:Paciente;
    private personalMedico:PersonalMedico;

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

    public get getPersonaMedico():PersonalMedico{
        return this.personalMedico;
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

    public set setPersonalMedico(newPersonalMedico: PersonalMedico){
        this.personalMedico=newPersonalMedico;
    }

    public get getEstado(): string{
        return this.estado;
    }

    public set setEstado(newEstado:string){
        this.estado=newEstado;
    }

}