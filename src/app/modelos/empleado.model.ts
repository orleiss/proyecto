import { Paciente } from './paciente.model';

export class Empleado extends Paciente{

    private cargo: string;
    private codigo: number;
    private sede: string;

    public get getCargo():string{
     return this.cargo;
    }

    public get getcodigo():number{
     return this.codigo;
    }

    public get getSede():string{
     return this.sede;   
    }

    public set setCargo(newCargo:string){
     this.cargo=newCargo;
    }

    public set setCodigo(newCodigo: number){
        this.codigo=newCodigo;
    }

    public set setSede(newSede:string){
        this.sede=newSede;
    }
}