import { Persona } from './Persona.model';



export class Paciente extends Persona {

    protected codigo: number;
    protected sede: string;
    protected alergias: string;
    protected tipoSangre: string;

    public get getAlergias() : string {
        return this.alergias;
    }

    public get getTipoSangre():string{
        return this.tipoSangre;
    }

    public set setAlergias(newDocumento : string) {
        this.alergias = newDocumento;
    }

    public set setTipoSangre(newDocumento : string) {
        this.tipoSangre = newDocumento;
    }

    public get getSede():string{
        return this.sede;
    }

    public set setSede(newSede:string){
        this.sede= newSede;
    }

    public get getCodigo():number{
        return this.codigo;
    }
    
    public set setCodigo(newCodigo:number){
        this.codigo=newCodigo;
    }

}