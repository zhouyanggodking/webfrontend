import { Component, EventEmitter } from '@angular/core';
import { DoNothingDirective } from './DoNothingDirective'

@Component({
    selector: 'entity-detail',
    templateUrl: 'EntityDetail.html',
    inputs: ['entityDetail']
})
export class EntityDetail {
    entityDetailClick: EventEmitter<any> = new EventEmitter<any>();
    entityDetail: any;
    rowColor: string = 'red';
}
