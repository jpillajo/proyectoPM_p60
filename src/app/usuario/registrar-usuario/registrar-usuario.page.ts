import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Propietario } from 'src/app/models/findme.models';
import { DataLocalService } from 'src/app/services/data-local.service';
import { FireauthService } from 'src/app/services/fireauth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
})
export class RegistrarUsuarioPage implements OnInit {

  new_user: Propietario;
  path = 'Propietarios';

  constructor(private database: FirestoreService,
              public toastController: ToastController,
              private navCtrl: NavController,
              public dataLocal: DataLocalService,
              private auth: FireauthService) { }

  ngOnInit() {
    this.nuevoPropietario();
  }

  nuevoPropietario(){
    this.new_user = {
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
      password: '',
      tipoVivienda: '',
      tiempoDisponible: ''
    }
  }

  registrarPropietario(){
    if (this.new_user.nombres != '' ||
        this.new_user.apellidos !='' ||
        this.new_user.edad == null ||
        this.new_user.ocupacion != '' ||
        this.new_user.direccion != '' ||
        this.new_user.email != '' ||
        this.new_user.celular == null ||
        this.new_user.password != '') {
      this.database.newDoc(this.new_user, this.path, this.new_user.id).then( res=> {
        this.auth.registrar(this.new_user.email, this.new_user.password);
        this.dataLocal.agregarPropietario(this.new_user.id,
          this.new_user.nombres,
          this.new_user.apellidos,
          this.new_user.edad,
          this.new_user.ocupacion,
          this.new_user.direccion,
          this.new_user.email,
          this.new_user.celular,
          this.new_user.fecha,0,
          this.new_user.password);
        this.navCtrl.navigateForward('/home');
        this.print("Usuario registrado");
      });
    } else {
      this.print("No se pudo registrar el usuario");
    }
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
