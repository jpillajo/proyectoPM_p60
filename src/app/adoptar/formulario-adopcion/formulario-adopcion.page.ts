import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { Adoptar } from 'src/app/interfaces';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-formulario-adopcion',
  templateUrl: './formulario-adopcion.page.html',
  styleUrls: ['./formulario-adopcion.page.scss'],
})
export class FormularioAdopcionPage implements OnInit {
  private selectedAnimal: string;
  constructor(private pickerController: PickerController,
    public firestoreService: FirestoreService) { }

  ngOnInit() {
  }

  public form = [
    { val: '1 a 2 horas', isChecked: true },
    { val: '2 a 3 horas', isChecked: false },
    { val: '3 a 4 horas', isChecked: false }
  ];

  async presentPicker() {
    const picker = await this.pickerController.create({
      buttons: [
        {
          text: 'Confirm',
          handler: (selected) => {
            this.selectedAnimal = selected.animal.value;
          },
        }
      ],
      columns: [
        {
          name: 'Vivienda',
          options: [
            { text: 'Casa', value: 'casa' },
            { text: 'Departamento', value: 'depa' },
            
          ]
        }
      ]
    });
    await picker.present();
  }

  emviarAdopcion (nom,ape,eda,ocup,dir,cor,tel,vivie,disp) {
    const path = 'adoptar';
    const newAdopcion: Adoptar ={
      id:this.firestoreService.getId(),
      nombres: nom,
      apellidos: ape,
      edad:eda,
      ocupacion:ocup,
      direccion:dir,
      correo:cor,
      telefono:tel,
      vivienda:vivie,
      disponibilidad:disp,
    }
    
    this.firestoreService.newDoc(newAdopcion,path,this.firestoreService.getId())

  }
}
