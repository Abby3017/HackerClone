import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: `
  //<app-header></app-header>
  //<h1>Hello {{name}}</h1>
  //`,
  encapsulation: ViewEncapsulation.None,
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.scss']
})
export class AppComponent  { name = 'Angular'; }
