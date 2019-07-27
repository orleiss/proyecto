import { Paciente } from './Paciente.model';

export class Estudiante extends Paciente {
    private codigo:number;
    private programa: string;
    private sede: string;
    private semestre:number;

    public get getCodigo():number{
        return this.codigo;
    }

    public get getPrograma():string{
        return this.programa;
    }

    public get getSede():string{
        return this.sede;
    }

    public get getSemestre():number {
        return this.semestre;
    }

    public set setCodigo(newCodigo:number){
        this.codigo=newCodigo;
    }

    public set setPrograma(newPrograma:string){
        this.programa=newPrograma;
    }

    public set setSede(newSede:string){
        this.sede= newSede;
    }

    public set setSemestre(newSemestre:number){
        this.semestre=newSemestre;
    }

}