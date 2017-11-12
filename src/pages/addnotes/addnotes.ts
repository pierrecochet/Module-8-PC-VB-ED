import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {storage} from 'firebase';

/**
 * Generated class for the AddnotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addnotes',
  templateUrl: 'addnotes.html',
})
export class AddnotesPage {

  dbName = '/list/';
  list = this.fdb.list(this.dbName);
  items: Observable<any[]>;
  item = { value : '' , key : ''}

  constructor(private camera : Camera, public navCtrl: NavController, public navParams: NavParams, public firebase : FirebaseProvider,public fdb : AngularFireDatabase) {
    
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

  async takePhoto(){
    try {
      const options: CameraOptions = {
        quality : 50,
        targetHeight : 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType : this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
        };
    
        const result  = await this.camera.getPicture(options);
        const image = 'data:image/jpeg;base64,${result}';
        const pictures = storage().ref('pictures');
        pictures.putString(result);

      }
    catch (e){
      console.error(e);
    }

  }
}
