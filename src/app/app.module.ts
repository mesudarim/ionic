import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
//Je les enlève car on le fait en easyLoading et on en a pas besoin
//import { PlacesPage } from '../pages/places/places';
//import { FriendsPage } from '../pages/friends/friends';
//import { AroundPage } from '../pages/around/around';
//import { AddPage } from '../pages/add/add';
//import { TabsPage } from '../pages/tabs/tabs';
//import { ComponentHeaderComponent } from '../components/component-header/component-header';
//import { ComponentLogoutComponent } from '../components/component-logout/component-logout';

@NgModule({
  declarations: [
    MyApp,
    //HomePage
    //PlacesPage,
    //FriendsPage,
    //AroundPage,
    //AddPage,
//    TabsPage,
    //ComponentHeaderComponent,
    //ComponentLogoutComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage
  //  PlacesPage,
  //  FriendsPage,
    //AroundPage,
    //AddPage,
//    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
