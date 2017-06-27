import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PlacesPage } from '../places/places';
import { FriendsPage } from '../friends/friends';
import { AroundPage } from '../around/around';
import { AddPage } from '../add/add';


/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = "PlacesPage";
  tab2Root = "FriendsPage";
  tab3Root = "AroundPage";
  tab4Root = "AddPage";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TabsPage');
  // }

}
