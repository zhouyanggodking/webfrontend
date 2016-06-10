import { Component } from '@angular/core';
import {BusinessCard} from './Components/BusinessCard';
@Component({
    selector: 'my-app',
    templateUrl: './template/AppComponent.template.html',
  directives: [BusinessCard]
})
export class AppComponent {
    name: string = 'GODKING';
}
