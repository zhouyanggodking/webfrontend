import {provideRouter, RouterConfig} from '@angular/router';
import { AppComponent } from './AppComponent';
import {EntityList} from './EntityList';
import {About} from './About';

const routes: RouterConfig = [
    { path: 'about', component: About },
    { path: 'entityList', component: EntityList }
];

export const appRouteProviders = [
    provideRouter(routes)
];