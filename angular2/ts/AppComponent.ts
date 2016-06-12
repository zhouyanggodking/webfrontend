import { Component } from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated'
//import {BusinessCard} from './Components/BusinessCard.component';
//import {PersonList} from './Components/PersonList.component'
import {HomeComponent} from './Components/Home/Home.component'
import {GameListComponent} from './Components/GameList/GameList.component'

declare let __moduleName : string;

@Component({
    moduleId: __moduleName,
    selector: 'my-app',
    templateUrl: '/template/AppComponent.template.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/game', name: 'GameList', component: GameListComponent }
])
export class AppComponent {
}
