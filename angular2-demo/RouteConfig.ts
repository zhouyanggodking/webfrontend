import {provideRouter, RouterConfig} from '@angular/router';
import { AppComponent } from './AppComponent';
import {EntityList} from './EntityList';
import {Entity} from './Entity';
import {About} from './About';

const routes: RouterConfig = [
    { path: 'about', component: About },
    { path: 'entityList', component: EntityList },
    { path: 'entity/:id', component: Entity }
];

export const appRouteProviders = [
    provideRouter(routes)
];