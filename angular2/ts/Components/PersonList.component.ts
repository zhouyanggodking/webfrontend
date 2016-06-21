import {Component, Directive} from '@angular/core'

import {Person} from '../Model/Person.model'

import {PersonService} from '../Services/Person.service'

import {DemoDirective} from '../Directives/Demo.Directives'
@Component({
    selector: 'person-list',
    templateUrl: './template/Components/PersonList.template.html',
    providers: [PersonService],
    directives: [DemoDirective]
    //providers: 
})
export class PersonList {
    personList: Person[];
    constructor(personSrv: PersonService) {
        this.personList = personSrv.get();
    }
}



