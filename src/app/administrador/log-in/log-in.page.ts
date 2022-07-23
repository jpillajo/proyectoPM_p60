import { Component, OnInit } from '@angular/core';
import { Propietario } from 'src/app/models/findme.models';
import { FireauthService } from 'src/app/services/fireauth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  path = 'Propietarios';
  usuario: Propietario = {
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
    password: ''
  }
  constructor(private database: FirestoreService, private auth: FireauthService) { }

  ngOnInit() {
  }

  validar(){
    console.log(this.usuario.email, this.usuario.password);
    this.auth.login(this.usuario.email, this.usuario.password).then( res => {
      console.log(this.usuario.email, this.usuario.password);
      console.log("Credenciales correctas");
    }).catch( err => {
      console.log("Credenciales incorrectas");
    });
  }
}
