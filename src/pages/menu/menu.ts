import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage = TabsPage;
  @ViewChild(Nav) nav : Nav;

  pages : PageInterface[] = [
    { pageName : 'My Notes', pageContainer : 'MynotesPage', pageTitle : 'MynotesPage', icon : 'document', index : 0 },
    { pageName : 'Add Notes', pageContainer : 'AddnotesPage', pageTitle : 'AddnotesPage', icon : 'logo-buffer', index : 1},
    { pageName : 'About', pageContainer : 'HomePage', pageTitle : 'AboutPage', icon : 'information-circle', index : 2},

  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public fire : AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }


 

  openPage(p : PageInterface){
    let params = {tabIndex : p.index};
    if(this.nav.getActiveChildNav() && p.index != undefined){
      this.nav.getActiveChildNav().select(p.index);
    }
    else{
      this.navCtrl.setRoot(p.pageContainer, params);
    }
  }


  isActive(p : PageInterface){
    let myNav = this.nav.getActiveChildNav();
    if(myNav){
      if(myNav.getSelected()){
        console.log(myNav.getSelected().root);
        if(myNav.getSelected().root === p.pageTitle){
          return 'primary'
        }
      }
      
      return;
    }
    return;
   
  }

  logout(){
    this.fire.auth.signOut();
    this.navCtrl.setRoot('LoginPage');
  }

}

export interface PageInterface{
  pageName : string;
  pageContainer : string;
  pageTitle ?: string;
  icon : string;
  index ?: number;
}


/*
   Evan Dadure (1106345)
  Pierre Cochet (1106342)
  Valention Buisson (1106329)
*/
