import { Component } from '@angular/core';
import { TabsPage } from '../../pages/tabs/tabs';
import {ComponentLogoutComponent} from '../component-logout/component-logout'
/**
 * Generated class for the ComponentHeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component-header',
  templateUrl: 'component-header.html'
})
export class ComponentHeaderComponent {
  tabName: string = TabsPage.name;
  text: string;


  constructor() {
    console.log('Hello ComponentHeaderComponent Component');
    this.text = 'Hello World';
    console.log(this.tabName)

  }


  openMenu(){

    console.log("openMenu")
  }
}
