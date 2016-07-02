///<reference path='Person.ts'/>
//import {Person, print, version} from './Person'
//import {Person as PersonAlias} from './Person'


import Person = Creature.Person;
let p = new Person();
p.name = 'OceanSky';
p.age = 90;
p.display();

Creature.print(Creature.version);