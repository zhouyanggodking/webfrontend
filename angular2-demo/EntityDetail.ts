import { Component } from '@angular/core';
import { DoNothingDirective } from './DoNothingDirective'

@Component({
    selector: 'entity-detail',
    templateUrl: 'EntityDetail.html',
    directives: [DoNothingDirective]
})
export class EntityDetail {
    entityDetail = {
        longName: 'Advent Software Corporation',
        shortName: 'ADVS'        
    };

    rowColor: string = 'red';

    tableRowClick(property: string) {
        console.log('table row clicked');
        console.log(property);
        console.log(this.rowColor);
    }
}
