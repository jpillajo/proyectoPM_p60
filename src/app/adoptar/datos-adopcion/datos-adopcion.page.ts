import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Mascota } from 'src/app/models/findme.models';
import { DataLocalService } from 'src/app/services/data-local.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-datos-adopcion',
  templateUrl: './datos-adopcion.page.html',
  styleUrls: ['./datos-adopcion.page.scss'],
})
export class DatosAdopcionPage implements OnInit {

  path = 'Mascotas';
  mascotas: Mascota[];

  constructor(private database:FirestoreService,
              private navCtrl: NavController,
              public dataLocal: DataLocalService) { }

  ngOnInit() {
    this.obtenerMascotas();
  }

  obtenerMascotas(){
    this.database.getCollections<Mascota>(this.path).subscribe( res=> {
      this.mascotas = res;
    });
  }

  adoptarMascota(mascota: Mascota){
    console.log(mascota);
    this.dataLocal.agregarMascota(mascota['uid'],
    mascota['nombre_mascota'],
    mascota['raza'],
    mascota['edad'],
    mascota['tamanho'],
    mascota['vacunas'],
    mascota['motivosDarAdopcion'],
    mascota['fecha'],
    mascota['foto'],
    mascota['idPropietario'],
    mascota['estadoAdopcion']);
    this.navCtrl.navigateForward('/formulario-adopcion');
  }
}
