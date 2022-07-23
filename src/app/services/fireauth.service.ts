import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FireauthService {

  constructor(public auth: AngularFireAuth) { }

  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logOut(){
    return this.auth.signOut();
  }

  registrar(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  async getUID(){
    const user = await this.auth.currentUser;
    if (user === null) {
      return null;
    } else {
      return user.uid;
    }
  }
}
