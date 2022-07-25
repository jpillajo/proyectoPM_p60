export class PropietarioLocal {
    public id: string;
    public nombres: string;
    public apellidos: string;
    public edad: number;
    public ocupacion: string;
    public direccion: string;
    public email: string;
    public celular: number;
    public fecha: Date;
    public administrador: number;
    public password: string;

    constructor(id: string, nombres: string, apellidos: string, edad: number, ocupacion: string, direccion: string, email: string, celular: number, fecha: Date, administrador: number, password: string){
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.edad =  edad;
        this.ocupacion = ocupacion;
        this.direccion = direccion;
        this.email = email;
        this.celular = celular;
        this.fecha = fecha;
        this.administrador = administrador;
        this.password = password;
    }
}