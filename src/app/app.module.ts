import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MyLibComponent, MyLibModule} from "my-lib";
import {RouterModule, RouterOutlet} from "@angular/router";
import {HelloComponent} from "./hello.component";

@NgModule({
  declarations: [
    AppComponent,
      HelloComponent
  ],
  imports: [
    BrowserModule,
    MyLibModule,
    RouterModule.forRoot([
      {
        path: 'keys',
        component: MyLibComponent,
        children: [
          {
            path: 'home',
            component: HelloComponent,
            outlet: 'outlet' // this outlet exists in MyLibComponent's template
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
