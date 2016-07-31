import { Component } from '@angular/core';
import {EntityDetail} from './EntityDetail';
import {EntityService} from './EntityService'

@Component({
    selector: 'entity-list',
    templateUrl: 'EntityList.html',
    directives: [EntityDetail],
    providers: [EntityService]
})
export class EntityList {
    entityList: any[];
    constructor(entityService: EntityService) {
        this.entityList = entityService.get();
    }
}
