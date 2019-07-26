import { Persona } from './Persona.model';


export class PersonalMedico extends Persona {

    private codigo: number;
    private ocupacion: string;
    private sede: string;

    public get getCodigo() : number {
        return this.codigo;
    }
    public set setCodigo(newCodigo : number) {
        this.codigo = newCodigo;
    }

    public get getOcupacion (): string{
        return this.ocupacion;
    }

    public set setOcupacion (newOcupacion: string){
         this.ocupacion=newOcupacion;
    }
}