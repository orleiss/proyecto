import { Paciente } from './Paciente.model';

export class Estudiante extends Paciente {
    
    private programa: string;
    private semestre:number;

    
    public get getPrograma():string{
        return this.programa;
    }

    public get getSemestre():number {
        return this.semestre;
    }

    public set setPrograma(newPrograma:string){
        this.programa=newPrograma;
    }

    
    public set setSemestre(newSemestre:number){
        this.semestre=newSemestre;
    }

}