import { Component, OnInit } from '@angular/core';
import { Propietario } from 'src/app/models/findme.models';
import { DataLocalService } from 'src/app/services/data-local.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-formulario-adopcion',
  templateUrl: './formulario-adopcion.page.html',
  styleUrls: ['./formulario-adopcion.page.scss'],
})
export class FormularioAdopcionPage implements OnInit {

  tipoVivienda: any;
  tiempoDisponible: any;
  update_user: Propietario;
  dataLocalUser: any;
  dataLocalPet: any;
  pathUser = 'Propietarios';
  pathPet = 'Mascotas';

  constructor(private database: FirestoreService,
              public dataLocal: DataLocalService) { }

  ngOnInit() {
    this.actualizarPropietario();
  }

  getVivienda(ev) {
    console.log(this.tipoVivienda = ev.target.value);
    this.tipoVivienda = ev.target.value;
  }

  getTiempoDisponible(ev){
    console.log(this.tiempoDisponible = ev.target.value);
    if (ev.target.value=="1a2") {
      this.tiempoDisponible = "1 a 2 horas";  
    } else if (ev.target.value=="2a3") {
      this.tiempoDisponible = "2 a 3 horas";
    } else if (ev.target.value=="3a4") {
      this.tiempoDisponible = "3 a 4 horas";
    }
  }

  actualizarPropietario(){
    this.update_user = {
      id: '',
      nombres: '',
      apellidos: '',
      edad: null,
      ocupacion: '',
      direccion: '',
      email: '',
      celular: null,
      fecha: new Date(),
      administrador: 0,
      password: '',
      tipoVivienda: '',
      tiempoDisponible: ''
    }
  }

  enviarFormulario(){
    this.dataLocalUser = this.dataLocal.propietario[0];
    this.dataLocalPet = this.dataLocal.mascota[0];
    console.log(this.dataLocal.mascota);
    this.update_user = {
      id: this.dataLocalUser['id'],
      nombres: this.dataLocalUser['nombres'],
      apellidos: this.dataLocalUser['apellidos'],
      edad: this.dataLocalUser['edad'],
      ocupacion: this.dataLocalUser['ocupacion'],
      direccion: this.dataLocalUser['direccion'],
      email: this.dataLocalUser['email'],
      celular: this.dataLocalUser['celular'],
      fecha: this.dataLocalUser['fecha'],
      administrador: this.dataLocalUser['administrador'],
      password: this.dataLocalUser['password'],
      tipoVivienda: this.tipoVivienda,
      tiempoDisponible: this.tiempoDisponible
    }
    if (this.update_user.nombres != '') {
      this.database.updateUser(this.pathUser, this.update_user.id, this.tiempoDisponible, this.tipoVivienda).then( res=>{
        console.log("Usuario actualizado");
      });
      this.database.updatePet(this.pathPet, this.dataLocalPet['uid'], "En proceso de adopción").then( res=>{
        console.log("Macota actualizada");
      });
    } else {
      console.log("No se pudo actualizar ni el propietario, ni la mascota");
    }
  }
}
