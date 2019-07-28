import { Paciente } from './Paciente.model';

export class Empleado extends Paciente{

    private cargo: string;
    
    public get getCargo():string{
     return this.cargo;
    }

    public set setCargo(newCargo:string){
     this.cargo=newCargo;
    }
    
}