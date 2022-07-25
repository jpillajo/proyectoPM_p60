import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Propietario } from 'src/app/models/findme.models';
import { DataLocalService } from 'src/app/services/data-local.service';
import { FireauthService } from 'src/app/services/fireauth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  //respuesta:any = false;
  pase = false;
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
    administrador: null,
    password: ''
  }
  constructor(private database: FirestoreService, private auth: FireauthService,  private navCtrl: NavController, public dataLocal: DataLocalService) { }

  ngOnInit() {
  }

  limpiarUsuario(){
    this.usuario = {
      id: '',
      nombres: '',
      apellidos: '',
      edad: null,
      ocupacion: '',
      direccion: '',
      email: '',
      celular: null,
      fecha: new Date(),
      administrador: null,
      password: ''
    }
  }

  validar(){
    this.database.getDoc(this.path, this.usuario.email).subscribe(res =>{
      const respuesta:any = res[0];
      this.dataLocal.agregarPropietario(respuesta['id'],
      respuesta['nombres'],
      respuesta['apellidos'],
      respuesta['edad'],
      respuesta['ocupacion'],
      respuesta['direccion'],
      respuesta['email'],
      respuesta['celular'],
      respuesta['fecha'],
      respuesta['administrador']);
      console.log(respuesta);
      if (res) {
        //this.auth.login(this.usuario.email, this.usuario.password).then( res => {
        this.auth.login(respuesta['email'], respuesta['password']).then( res => {
          console.log("Credenciales correctas");
          if (this.dataLocal.esAdministrador==1) {
            this.navCtrl.navigateForward('/menu-admin');
            this.limpiarUsuario();
          } else {
            this.navCtrl.navigateForward('/home');
            this.limpiarUsuario();
          }
        }).catch( err => {
          console.log("Credenciales incorrectas");
        });
      }
    });
  }

  validarDatos(){
    /*const datos = await this.database.getDoc(this.path, this.usuario.email);
    datos.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
    console.log(datos['nombres']);*/
    /*this.database.getDoc(this.path, this.usuario.email).subscribe(res =>{
      //console.log(res);
      const respuesta:any = res[0];
      console.log(respuesta['nombres'], respuesta['apellidos'])
      const array = [];|
      for(var i in respuesta) {
        array.push([i,respuesta[i]]);
      }
      console.log(array);
    });*/
    this.auth.login(this.usuario.email, this.usuario.password).then( res => {
      console.log("Credenciales correctas");
      this.database.getDoc(this.path, this.usuario.email).subscribe(res =>{
        //const respuesta:any = res[0];
        /*this.respuesta = res[0];
        this.dataLocal.agregarPropietario(this.respuesta['id'],
        this.respuesta['nombres'],
        this.respuesta['apellidos'],
        this.respuesta['edad'],
        this.respuesta['ocupacion'],
        this.respuesta['direccion'],
        this.respuesta['email'],
        this.respuesta['celular'],
        this.respuesta['fecha'],
        this.respuesta['administrador']);
        console.log(this.respuesta);*/
        /*if (res) {
          //this.pase = true;
          if (this.dataLocal.esAdministrador==1) {
            this.navCtrl.navigateForward('/menu-admin');
            this.limpiarUsuario();
          } else {
            this.navCtrl.navigateForward('/home');
            this.limpiarUsuario();
          }
        }*/
      });
      //this.limpiarUsuario();
      console.log(this.dataLocal.esAdministrador);
      /*if (this.respuesta) {
        if (this.dataLocal.esAdministrador==1) {
          this.navCtrl.navigateForward('/menu-admin');
          this.limpiarUsuario();
        } else {
          this.navCtrl.navigateForward('/home');
          this.limpiarUsuario();
        }
      }*/
      if (this.dataLocal.esAdministrador==1) {
        this.navCtrl.navigateForward('/menu-admin');
        this.limpiarUsuario();
      } else {
        this.navCtrl.navigateForward('/home');
        this.limpiarUsuario();
      }
      //this.respuesta = false;
    }).catch( err => {
      console.log("Credenciales incorrectas");
    });
  }
}
