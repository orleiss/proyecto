export class Persona{
    protected apellido : string;
    protected correo: string;    
    protected fechaNacimiento: Date; 
    protected genero: string; 
    protected identificacion: number; 
    protected nombre: string; 
    protected telefono: number; 

    public get getApellido(): string{
        return this.apellido;
    }

    public get getCorreo(): string{
        return this.correo;
    }

    public get getFechaNacimiento(): Date{
        return this.fechaNacimiento;
    }

    public get getGenero(): string{
        return this.genero;
    }

    public get getIdentificacion(): number{
        return this.identificacion;
    }

    public get getNombre(): string{
        return this.nombre;
    }

    public get getTelefono(): number{
        return this.telefono;
    }

    public set setApellido (newApellido : string) {
        this.apellido = newApellido;
    }

    public set setCorreo(newCorreo: string){
        this.correo=newCorreo;
    }

    public set setFechaNacimiento(newfechaNacimiento: Date){
        this.fechaNacimiento=newfechaNacimiento;
    }

    public set setGenero(newGenero: string){
        this.genero=newGenero;
    }

    public set setIdentificacion (newIdentificacion: number){
        this.identificacion=newIdentificacion;
    }

    public set setNombre(newNombre: string){
        this.nombre=newNombre;
    }

    public set setTelefono(newTelefono: number){
        this.telefono=newTelefono;
    }


}