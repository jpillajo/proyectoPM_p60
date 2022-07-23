import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FireauthService } from '../services/fireauth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private auth: FireauthService,
              private navCtrl: NavController) {}

  cerrar(){
    this.auth.logOut();
    this.navCtrl.navigateForward('/log-in');
  }
}
