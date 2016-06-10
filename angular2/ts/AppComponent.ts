import { Component } from '@angular/core';
import {BusinessCard} from './Components/BusinessCard.component';
import {PersonList} from './Components/PersonList.component'
@Component({
    selector: 'my-app',
    templateUrl: './template/AppComponent.template.html',
    directives: [BusinessCard, PersonList]
})
export class AppComponent {
    name: string = 'GODKING';
}
