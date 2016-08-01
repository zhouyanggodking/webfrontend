import { Component, EventEmitter } from '@angular/core';
import { DoNothingDirective } from './DoNothingDirective'

@Component({
    selector: 'entity-detail',
    templateUrl: 'EntityDetail.html',
    directives: [DoNothingDirective],
    outputs: ['entityDetailClick']
})
export class EntityDetail {
    entityDetailClick: EventEmitter<any> = new EventEmitter<any>();
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

    entityDetailClicked() {
        this.entityDetailClick.emit(this.entityDetail);
    }
}
