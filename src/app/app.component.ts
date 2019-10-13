import { Component } from '@angular/core';
import {MessageComponent} from 'kpc-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'kpc-angular-demo';

  onClick() {
    MessageComponent.success('Hello KPC!');
  }
}
