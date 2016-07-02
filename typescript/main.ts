import {Person, print, version} from './Person'
//import {Person as PersonAlias} from './Person'

let p = new Person();
p.name = 'OceanSky';
p.age = 90;
p.display();

print(version);

//using Logger
import {Logger} from './third-party-lib/Logger'

Logger.info('Import existing js lib routine');