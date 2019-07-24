import { Persona } from './persona.model';


export class PersonalMedico extends Persona {

    private codigo: number;
    private ocupacion: string;

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