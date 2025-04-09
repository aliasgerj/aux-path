# Using Aux

## Navigation
To navigate to the auxilarry, use: http://localhost:4200/keys/(outlet:home)

## Library code
This app uses a library - and the library has a component as follows:

```
import { Component } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>My lib works!</p>
    <router-outlet name="outlet"></router-outlet>
  `,
  styles: [
  ]
})
export class MyLibComponent {
  name = 'World';
}
```

We are going to pass our Hello Component into it. You could pass any component to this outlet - but the component to be passed to this outlet is defined in our app's routing (see our app's module in source code).
