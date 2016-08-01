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
    entitySelected: any;
    constructor(entityService: EntityService) {
        this.entityList = entityService.get();
        this.entitySelected = this.entityList[0];
    }

    entityDetailClicked(entityDetail) {
        console.log(entityDetail);
    }

    rowClicked(entity) {
        this.entitySelected = entity;
    }
}
