import { Component } from '@angular/core';
import {EntityDetail} from './EntityDetail'

@Component({
    selector: 'entity-list',
    templateUrl: 'EntityList.html',
    directives:[EntityDetail]
})
export class EntityList {
    entityList = [
        {
            longName: 'Advent Software Corporation',
            shortName: 'ADV'
        },
        {
            longName: 'International Business Machine',
            shortName: 'IBM'
        },
        {
            longName: 'Microsoft Corporation',
            shortName: 'MSFT'
        }
    ];
}
