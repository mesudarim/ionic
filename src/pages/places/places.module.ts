import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacesPage } from './places';
import {ComponentHeaderComponent} from './../../components/component-header'

@NgModule({
  declarations: [
    PlacesPage,
    ComponentHeaderComponent
  ],
  imports: [
    IonicPageModule.forChild(PlacesPage),
  ],
  exports: [
    PlacesPage
  ]
})
export class PlacesPageModule {}
