import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Propietario } from 'src/app/models/findme.models';
import { FireauthService } from 'src/app/services/fireauth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  path = 'Propietarios';
  usuario: Propietario = {
    id: this.database.getId(),
    nombres: '',
    apellidos: '',
    edad: null,
    ocupacion: '',
    direccion: '',
    email: '',
    celular: null,
    fecha: new Date(),
    administrador: 0,
    password: ''
  }
  constructor(private database: FirestoreService, private auth: FireauthService,  private navCtrl: NavController) { }

  ngOnInit() {
  }

  limpiarUsuario(){
    this.usuario = {
      id: this.database.getId(),
      nombres: '',
      apellidos: '',
      edad: null,
      ocupacion: '',
      direccion: '',
      email: '',
      celular: null,
      fecha: new Date(),
      administrador: 0,
      password: ''
    }
  }

  async validar(){
    /*const datos = await this.database.getDoc(this.path, this.usuario.email);
    datos.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
    console.log(datos['nombres']);*/
    this.database.getDoc(this.path, this.usuario.email).subscribe(res =>{
      //console.log(res);
      const respuesta:any = res[0];
      console.log(respuesta['nombres'])
      console.log(respuesta['apellidos'])
      /*const array = [];
      for(var i in respuesta) {
        array.push([i,respuesta[i]]);
      }
      console.log(array);*/
    });
    this.auth.login(this.usuario.email, this.usuario.password).then( res => {
      console.log("Credenciales correctas");
      this.limpiarUsuario();
      this.navCtrl.navigateForward('/home');
    }).catch( err => {
      console.log("Credenciales incorrectas");
    });
  }
}
