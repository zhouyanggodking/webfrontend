import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS} from '@angular/router-deprecated'
import { AppComponent } from './AppComponent';

//Router is a service implemented by a collection of DI providers
//most of which are identified in the ROUTER_PROVIDERS
//Import it here to make router service available everywhere in the application
bootstrap(AppComponent, [ROUTER_PROVIDERS]);
