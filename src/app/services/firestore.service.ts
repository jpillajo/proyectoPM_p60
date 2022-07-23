import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public database:AngularFirestore) { }
  
  newDoc(datos:any, path:string, id:string ){
    const collection = this.database.collection(path);
    return collection.doc(id).set(datos);
  }

  getId(){
    return this.database.createId();
  }

  getCollections<tipo>(path: string){
    return this.database.collection<tipo>(path).valueChanges();
  }

  deleteDoc(path:string, id:string){
    return this.database.collection(path).doc(id).delete();
  }
}
