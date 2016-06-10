import {Injectable} from '@angular/core'
import {Person} from '../Model/Person.model'

@Injectable()
export class PersonService {
    get(): Person[]{
        return [
            {
                id: '001',
                name: 'James',
                title: 'SE'
            }, {
                id: '002',
                name: 'Ronaldo',
                title: 'QA'
            }, {
                id: '003',
                name: 'Xavi',
                title: 'FB'
            }

        ];
    }
}