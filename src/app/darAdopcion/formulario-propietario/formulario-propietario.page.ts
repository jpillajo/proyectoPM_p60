import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Propietario } from 'src/app/models/findme.models';
import { DataLocalService } from 'src/app/services/data-local.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-formulario-propietario',
  templateUrl: './formulario-propietario.page.html',
  styleUrls: ['./formulario-propietario.page.scss'],
})
export class FormularioPropietarioPage implements OnInit {

  new_propietario: Propietario;
  path = 'Propietarios';

  constructor(private database: FirestoreService,
              public toastController: ToastController,
              private navCtrl: NavController,
              public dataLocal: DataLocalService) { }

  ngOnInit() {
    this.nuevoPropietario();
  }

  nuevoPropietario(){
    this.new_propietario = {
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
      password: ''/*,
      imagen: ''*/
    }
  }

  registrarPropietario(){
    if (this.new_propietario.nombres != '') {
      this.database.newDoc(this.new_propietario, this.path, this.database.getId()).then( res=> {
        this.dataLocal.agregarPropietario(this.new_propietario.id,
          this.new_propietario.nombres,
          this.new_propietario.apellidos,
          this.new_propietario.edad,
          this.new_propietario.ocupacion,
          this.new_propietario.direccion,
          this.new_propietario.email,
          this.new_propietario.celular,
          this.new_propietario.fecha);
        this.navCtrl.navigateForward('/formulario-mascota');
        console.log("Propietario registrado");
      });
    } else {
      console.log("No se pudo registrar el propietario");
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
