import { Persona } from './Persona.model';


export class PersonalMedico extends Persona {

    private codigo: number;
    private ocupacion: string;
    private sede: string;

    public get Codigo() : number {
        return this.codigo;
    }
    public set Codigo(newCodigo : number) {
        this.codigo = newCodigo;
    }

    public get Ocupacion (): string{
        return this.ocupacion;
    }

    public set Ocupacion (newOcupacion: string){
         this.ocupacion=newOcupacion;
    }

    get Sede(): string{
        return this.sede;
    }

    set Sede(newSede: string){
        this.sede = newSede;
    }

}