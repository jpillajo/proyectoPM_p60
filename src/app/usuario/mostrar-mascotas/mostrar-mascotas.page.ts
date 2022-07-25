import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/findme.models';
import { DataLocalService } from 'src/app/services/data-local.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-mostrar-mascotas',
  templateUrl: './mostrar-mascotas.page.html',
  styleUrls: ['./mostrar-mascotas.page.scss'],
})
export class MostrarMascotasPage implements OnInit {

  path = 'Mascotas';
  mascotas: Mascota[]=[];

  constructor(public dataLocal: DataLocalService,
              private database:FirestoreService) { }

  ngOnInit() {
    this.obtenerMascotas();
  }

  obtenerMascotas(){
    this.database.getCollections<Mascota>(this.path).subscribe( res=> {
      this.mascotas = res;
    });
  }
}
