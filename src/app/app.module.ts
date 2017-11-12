import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MenuPage } from '../pages/menu/menu';
//import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { MynotesPage } from '../pages/mynotes/mynotes';
import { AddnotesPage } from '../pages/addnotes/addnotes';

import { Camera } from '@ionic-native/camera';

import { HttpModule} from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { TabsPage } from '../pages/tabs/tabs'


const config = {
    apiKey: "AIzaSyDx4CYHrFOz_pWzHdwkqsZ1284kx1UhnwE",
    authDomain: "testproject-66ab1.firebaseapp.com",
    databaseURL: "https://testproject-66ab1.firebaseio.com",
    projectId: "project-581025784268",
    storageBucket: "testproject-66ab1.appspot.com",
    messagingSenderId: "581025784268"
  };



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    FirebaseProvider,
    Camera,
  ]
})
export class AppModule {}


/*
   Evan Dadure (1106345)
  Pierre Cochet (1106342)
  Valention Buisson (1106329)
*/
