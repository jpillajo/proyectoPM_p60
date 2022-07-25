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
  path = 'Propietarios';

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
    this.tiempoDisponible = ev.target.value;
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
    console.log(this.dataLocalUser);
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
    console.log(this.update_user);
    console.log(this.dataLocal.propietario);
    if (this.update_user.nombres != '') {
      //this.database.newDoc(this.update_user, this.path, this.update_user.id).then( res=> {
      this.database.updateDoc(this.path, this.update_user.id, this.tiempoDisponible, this.tipoVivienda).then( res=>{
        // this.dataLocal.agregarPropietario(this.update_user.id,
        //   this.update_user.nombres,
        //   this.update_user.apellidos,
        //   this.update_user.edad,
        //   this.update_user.ocupacion,
        //   this.update_user.direccion,
        //   this.update_user.email,
        //   this.update_user.celular,
        //   this.update_user.fecha,0);
        console.log("Usuario actualizado");
      });
    } else {
      console.log("No se pudo actualizar el propietario");
    }
  }
}
