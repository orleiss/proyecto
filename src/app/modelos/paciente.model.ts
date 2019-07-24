import { Persona } from './persona.model';




export class Paciente extends Persona {

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
}