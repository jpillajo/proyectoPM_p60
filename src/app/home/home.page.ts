import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataLocalService } from '../services/data-local.service';
import { FireauthService } from '../services/fireauth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private auth: FireauthService,
              private navCtrl: NavController,
              public dataLocal: DataLocalService) {}

  cerrar(){
    this.auth.logOut();
    //this.eliminarTodos();
    this.navCtrl.navigateForward('/log-in');
  }

  eliminarTodos() {
    for (const productos of this.dataLocal.propietario) {
      this.dataLocal.propietario.splice(0, this.dataLocal.propietario.length);
    }
  }
}
