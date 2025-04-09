import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <p>Welcome to the consumer app!</p>
    <router-outlet></router-outlet>    
  `,
  styles: []
})
export class AppComponent {
  title = 'consumer';
}
