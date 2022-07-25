import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
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

  path = 'Propietarios';
  usuario: Propietario = {
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
    password: '',
    tipoVivienda: '',
    tiempoDisponible: ''
  }

  constructor(private database: FirestoreService,
              private auth: FireauthService,
              private navCtrl: NavController,
              public dataLocal: DataLocalService,
              public toastController: ToastController) { }

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
      password: '',
      tipoVivienda: '',
      tiempoDisponible: ''
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
      respuesta['administrador'],
      respuesta['password']);
      if (res) {
        this.auth.login(this.usuario.email, this.usuario.password).then( res => {
        //this.auth.login(respuesta['email'], respuesta['password']).then( res => {
          this.print("Credenciales correctas");
          if (this.dataLocal.esAdministrador==1) {
            this.navCtrl.navigateForward('/menu-admin');
            this.limpiarUsuario();
          } else {
            this.navCtrl.navigateForward('/home');
            this.limpiarUsuario();
          }
        }).catch( err => {
          this.print("Credenciales incorrectas");
        });
      }
    });
  }

  async print(msg:string){
    const toast = await this.toastController.create({
      //cssClass: 'text_msg',
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
