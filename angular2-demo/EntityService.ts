import {Injectable} from '@angular/core'

@Injectable()//used for service depending on other services
export class EntityService {
    private entityList = [
        {
            id: '1',
            longName: 'Advent Software Corporation',
            shortName: 'ADV'
        },
        {
            id: '2',
            longName: 'International Business Machine',
            shortName: 'IBM'
        },
        {
            id: '3',
            longName: 'Microsoft Corporation',
            shortName: 'MSFT'
        }
    ];
    get() {
        return this.entityList;
    }

    getById(id: string) {
        for (let entity of this.entityList) {
            if (id === entity.id) {
                return entity;
            }
        }
        return null;
    }
}