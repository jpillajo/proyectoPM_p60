import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Mascota } from 'src/app/models/findme.models';
import { DataLocalService } from 'src/app/services/data-local.service';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-formulario-mascota',
  templateUrl: './formulario-mascota.page.html',
  styleUrls: ['./formulario-mascota.page.scss'],
})
export class FormularioMascotaPage implements OnInit {

  new_mascota: Mascota;
  path = 'Mascotas';
  newFile: any;

  constructor(private database: FirestoreService,
              public toastController: ToastController,
              private navCtrl: NavController,
              public fileStorage: FirestorageService,
              public dataLocal: DataLocalService) { }

  ngOnInit() {
    this.nuevaMascota();
  }

  nuevaMascota(){
    this.new_mascota = {
      uid: this.database.getId(),
      nombre_mascota: '',
      raza: '',
      edad: null,
      tamanho: null,
      vacunas: '',
      motivosDarAdopcion: '',
      fecha: new Date(),
      foto: '',
      idPropietario: this.dataLocal.idPropietario,
      estadoAdopcion: 0
    }
  }

  async registrarMascota(){
    if (this.new_mascota.nombre_mascota != '') {
      //const nombre_foto = this.new_mascota.nombre_mascota+"-"+this.new_mascota.uid
      const res = await this.fileStorage.cargarImagen(this.newFile, this.path, this.new_mascota.uid);
      this.new_mascota.foto = res;
      this.database.newDoc(this.new_mascota, this.path, this.new_mascota.uid).then( res=> {
        this.dataLocal.agregarMascota(this.new_mascota.uid,
          this.new_mascota.nombre_mascota,
          this.new_mascota.raza,
          this.new_mascota.edad,
          this.new_mascota.tamanho,
          this.new_mascota.vacunas,
          this.new_mascota.motivosDarAdopcion,
          this.new_mascota.fecha,
          this.new_mascota.foto,
          this.dataLocal.idPropietario,
          this.new_mascota.estadoAdopcion);
        this.navCtrl.navigateForward('/envio-solicitud');
        console.log("Mascota registrada");
      });
    } else {
      console.log("No se pudo registrar su mascota");
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

  async uploadImage(file: any){
    if (file.target.files && file.target.files[0]) {
      this.newFile = file.target.files[0];
      const reader = new FileReader();
      reader.onload = ((image)=>{
        this.new_mascota.foto = this.new_mascota.nombre_mascota+"-"+image.target.result as string;
        console.log(this.newFile);
      });
      reader.readAsDataURL(file.target.files[0]);
    }
  }
}
