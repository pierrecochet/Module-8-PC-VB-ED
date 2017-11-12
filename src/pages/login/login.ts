import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { MenuPage  } from '../menu/menu';
import { FirebaseProvider} from '../../providers/firebase/firebase';
import * as firebase from 'firebase/app';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credentials = {email : '', password :''};

constructor(public fire : AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private alert : AlertController, db : FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submit(){
    let cred = this.credentials;
		if(cred.email != '' &&  cred.email.indexOf('@')>-1 && cred.password.length >= 6){
			 this.fire.auth.signInWithEmailAndPassword(cred.email,cred.password)
			 .then(() => {
        this.navCtrl.setRoot(MenuPage);
        this.dispAlert('login as : ' + cred.email);
			})
			.catch(error => {
				this.dispAlert(error.message)
			});
		}
		else{
			this.dispAlert('invalid credential ');
		}
  }

		
  	dispAlert(text){
		let alrt = this.alert.create({
			title : 'Info !',
			message : text,
			buttons: ['OK']
		});

		alrt.present();
  }
  
  goRegister(){
    this.navCtrl.push('RegisterPage');
	}
	
	loginGoogle(){
		this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
		.then(data => {
			console.log(data);
			this.dispAlert('sign in as : ' + data.user.email);
			this.navCtrl.setRoot(MenuPage);
		})
		.catch( error => {
			this.dispAlert(error.message);
		});
	}

	loginFacebook(){
		var provider = new firebase.auth.FacebookAuthProvider();
		provider.addScope('user_birthday');
		firebase.auth().signInWithPopup(provider)
		.then(data => {
			console.log(data);
		})
		.catch(error => {
			this.dispAlert(error.message);
		})
	}

}


/*
   Evan Dadure (1106345)
  Pierre Cochet (1106342)
  Valention Buisson (1106329)
*/
