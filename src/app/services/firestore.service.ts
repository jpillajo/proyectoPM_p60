import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public database:AngularFirestore) { }
  
  newDoc(datos:any, path:string, id:string){
    const collection = this.database.collection(path);
    return collection.doc(id).set(datos);
  }

  updateUser(path:string, id:string, tiempo:string, vivienda: string){
    const collection = this.database.collection(path);
    return collection.doc(id).update({
      "tiempoDisponible": tiempo,
      "tipoVivienda": vivienda
    });
  }

  updatePet(path:string, id:string, estadoAdopcion:string){
    const collection = this.database.collection(path);
    return collection.doc(id).update({
      "estadoAdopcion": estadoAdopcion
    });
  }

  getId(){
    return this.database.createId();
  }

  getCollections<tipo>(path: string){
    return this.database.collection<tipo>(path).valueChanges();
  }

  getDoc(path: string, email: string){
    //return this.database.firestore.collection(path).where('email', '==', email).get();
    return this.database.collection(path, ref => ref.where('email', '==', email)).valueChanges();
    //return this.database.collection(path).doc(email).get();
  }

  deleteDoc(path:string, id:string){
    return this.database.collection(path).doc(id).delete();
  }
}
