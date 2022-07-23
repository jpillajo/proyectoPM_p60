export class MascotaLocal {
    public uid: string;
    public nombre_mascota: string;
    public raza: string;
    public edad: number;
    public tamanho: number;
    public vacunas: string;
    public motivosDarAdopcion: string;
    public fecha: Date;
    public foto: string;
    public idPropietario: string;

    constructor(uid: string, nombre_mascota: string, raza: string, edad: number, tamanho: number, vacunas: string, motivosDarAdopcion: string, fecha: Date, foto: string, idPropietario: string){
        this.uid = uid;
        this.nombre_mascota = nombre_mascota;
        this.raza = raza;
        this.edad =  edad;
        this.tamanho = tamanho;
        this.vacunas = vacunas;
        this.motivosDarAdopcion = motivosDarAdopcion;
        this.fecha = fecha;
        this.foto = foto;
        this.idPropietario = idPropietario;
    }
}