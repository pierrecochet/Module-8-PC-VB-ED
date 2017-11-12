import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  dbName = '/list/';
  list = this.fdb.list(this.dbName);

  constructor(public fdb : AngularFireDatabase) {
  }


  addItem(item : string){
    this.list.push({text : item});
  }

  removeItem(id){
    this.list.remove(id);
  }

}


/*
   Evan Dadure (1106345)
  Pierre Cochet (1106342)
  Valention Buisson (1106329)
*/
