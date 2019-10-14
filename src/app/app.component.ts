import { Component, ViewEncapsulation } from '@angular/core';
// import { MessageComponent } from 'kpc-angular';
import { MessageComponent } from 'kpc-angular/@stylus'; // use `ksyun` theme

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  expandedKeys = [];
  selectedKey = '3-1';
  data = [{name: 'A'}, {name: 'B'}]

  onClick() {
    MessageComponent.success('Hello KPC!');
  }
}
