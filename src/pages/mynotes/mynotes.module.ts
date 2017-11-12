import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MynotesPage } from './mynotes';

@NgModule({
  declarations: [
    MynotesPage,
  ],
  imports: [
    IonicPageModule.forChild(MynotesPage),
  ],
})
export class MynotesPageModule {}
