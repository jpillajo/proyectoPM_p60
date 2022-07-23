export interface Propietario {
    id: string;
    nombres: string;
    apellidos: string;
    edad: number;
    ocupacion: string;
    direccion: string;
    email: string;
    celular: number;
    fecha: Date;
    administrador: number;
    password: string;
    //imagen: string;
}

export interface Mascota {
    uid: string;
    nombre_mascota: string;
    raza: string;
    edad: number;
    tamanho: number;
    vacunas: string;
    motivosDarAdopcion: string;
    fecha: Date;
    foto: string;
    idPropietario: string;
    estadoAdopcion: number;
}