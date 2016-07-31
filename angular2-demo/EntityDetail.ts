import { Component } from '@angular/core';

@Component({
    selector: 'entity-detail',
    templateUrl: 'EntityDetail.html'
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
