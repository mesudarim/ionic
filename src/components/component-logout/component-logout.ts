import { Component } from '@angular/core';

/**
 * Generated class for the ComponentLogoutComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component-logout',
  templateUrl: 'component-logout.html'
})
export class ComponentLogoutComponent {

  text: string = "logout";

  constructor() {
    console.log('Hello ComponentLogoutComponent Component');
    this.text = 'Hello World';
  }

}
