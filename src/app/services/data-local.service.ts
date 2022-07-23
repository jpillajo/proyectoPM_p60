import { Injectable } from '@angular/core';
import { MascotaLocal } from '../models/mascota.models';
import { PropietarioLocal } from '../models/propietario.models';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  mascota : MascotaLocal[]=[];
  propietario : PropietarioLocal[]=[];
  idPropietario: string;

  constructor() { }

  agregarPropietario(id: string, nombres: string, apellidos: string, edad: number, ocupacion: string, direccion: string, email: string, celular: number, fecha: Date){
    //this.navCtrl.navigateForward('/tabs/tab2');
    const nuevoPropietario = new PropietarioLocal(id, nombres, apellidos, edad, ocupacion, direccion, email, celular, fecha);
    this.propietario.unshift(nuevoPropietario);
    this.idPropietario = nuevoPropietario.id;
  }

  agregarMascota(uid: string, nombre_mascota: string, raza: string, edad: number, tamanho: number, vacunas: string, motivosDarAdopcion: string, fecha: Date, foto: string, idPropietario: string){
    //this.navCtrl.navigateForward('/tabs/tab2');
    const nuevaMascota = new MascotaLocal(uid, nombre_mascota, raza, edad, tamanho, vacunas, motivosDarAdopcion, fecha, foto, idPropietario);
    this.mascota.unshift(nuevaMascota);
  }
}
