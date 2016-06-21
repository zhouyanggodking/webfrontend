import { Component } from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated'
import {BusinessCard} from './Components/BusinessCard.component';
import {PersonList} from './Components/PersonList.component'
import {HomeComponent} from './Components/Nav/Home/Home.component'
import {GameListComponent} from './Components/Nav/GameList/GameList.component'
import {JacksOrBetterComponent} from './Components/Games/JacksOrBetter/JacksOrBetter.component'

declare let __moduleName : string;

@Component({
    moduleId: __moduleName,
    selector: 'my-app',
    templateUrl: '/template/AppComponent.template.html',
    directives: [ROUTER_DIRECTIVES, PersonList]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/game', name: 'GameList', component: GameListComponent },
    { path: '/jacksorbetter', name: 'JacksOrBetter', component: JacksOrBetterComponent }
])
export class AppComponent {
}
