import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated'

@Component({
    selector: 'game-list',
    templateUrl:'template/Components/Nav/GameList/GameList.template.html',
    directives: [ROUTER_DIRECTIVES]
})
export class GameListComponent {
}