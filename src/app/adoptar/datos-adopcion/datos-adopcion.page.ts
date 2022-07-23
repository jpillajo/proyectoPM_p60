import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Mascota } from 'src/app/models/findme.models';
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
              private navCtrl: NavController) { }

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.database.getCollections<Mascota>(this.path).subscribe( res=> {
      this.mascotas = res;
    });
  }

  adoptarMascota(mascota: Mascota){
    console.log(mascota);
    this.navCtrl.navigateForward('/formulario-adopcion');
  }
}
