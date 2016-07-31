import {Injectable} from '@angular/core'

@Injectable()//used for service depending on other services
export class EntityService {
    get() {
        return [
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
}