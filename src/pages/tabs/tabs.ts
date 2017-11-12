import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  rootPage1 = 'MynotesPage';
  rootPage2 = 'AddnotesPage';
  rootPage3 = 'AboutPage';
  index : number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.index = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}

/*
   Evan Dadure (1106345)
  Pierre Cochet (1106342)
  Valention Buisson (1106329)
*/
