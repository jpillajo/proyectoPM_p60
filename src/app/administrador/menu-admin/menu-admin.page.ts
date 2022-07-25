import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';
import { FireauthService } from 'src/app/services/fireauth.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.page.html',
  styleUrls: ['./menu-admin.page.scss'],
})
export class MenuAdminPage implements OnInit {

  constructor(private auth: FireauthService,
              private navCtrl: NavController,
              public dataLocal: DataLocalService) { }

  ngOnInit() {
  }

  cerrar(){
    this.auth.logOut();
    this.navCtrl.navigateForward('/log-in');
  }
}
