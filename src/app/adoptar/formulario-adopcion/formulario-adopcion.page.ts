import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { Adoptar } from 'src/app/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-formulario-adopcion',
  templateUrl: './formulario-adopcion.page.html',
  styleUrls: ['./formulario-adopcion.page.scss'],
})
export class FormularioAdopcionPage implements OnInit {
  private selectedAnimal: string;
  constructor(public firestoreService: FirestoreService,
              public dataLocal: DataLocalService) { }

  ngOnInit() {
  }

}
