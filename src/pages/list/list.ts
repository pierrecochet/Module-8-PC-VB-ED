import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  dbName = '/list/';
  list = this.fdb.list(this.dbName);
  items: Observable<any[]>;
  item = { value : '' , key : ''}

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase : FirebaseProvider,public fdb : AngularFireDatabase) {
    
    this.items = this.list.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  addItem(){
    this.firebase.addItem(this.item.value);
    
  }

  removeItem(item){
    console.log(item.key);
    this.firebase.removeItem(item.key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}

/*
   Evan Dadure (1106345)
  Pierre Cochet (1106342)
  Valention Buisson (1106329)
*/

