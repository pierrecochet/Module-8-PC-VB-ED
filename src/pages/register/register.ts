import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { MenuPage  } from '../menu/menu';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-register',
	templateUrl: 'register.html',
})



export class RegisterPage {


	credentials = {email : '', password : ''};

	constructor(public fire : AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,private alert : AlertController) {

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RegisterPage');
	}
	
	logForm(){
		let cred = this.credentials;
		if(cred.email != '' &&  cred.email.indexOf('@')>-1 && cred.password.length >= 6){
			 this.fire.auth.createUserWithEmailAndPassword(cred.email,cred.password)
			 .then(() => {
				this.navCtrl.setRoot(MenuPage);
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

}


/*
   Evan Dadure (1106345)
  Pierre Cochet (1106342)
  Valention Buisson (1106329)
*/
