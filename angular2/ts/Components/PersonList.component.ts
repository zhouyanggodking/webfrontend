import {Component} from '@angular/core'

import {Person} from '../Model/Person.model'

import {PersonService} from '../Services/Person.service'

@Component({
    selector: 'person-list',
    templateUrl: './template/Components/PersonList.template.html',
    providers: [PersonService]
    //providers: 
})
export class PersonList {
    personList: Person[];
    constructor(personSrv: PersonService) {
        this.personList = personSrv.get();
    }
}
