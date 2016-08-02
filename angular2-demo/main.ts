import { bootstrap }    from '@angular/platform-browser-dynamic';
import {provide, PLATFORM_DIRECTIVES} from '@angular/core'

import { ROUTER_DIRECTIVES } from '@angular/router';

import { AppComponent } from './AppComponent';
import {EntityService} from './EntityService'
import {EntityDetail} from './EntityDetail'
import {DoNothingDirective} from './DoNothingDirective'

import {appRouteProviders} from './RouteConfig'
bootstrap(AppComponent, [provide(EntityService, { useClass: EntityService }),//for shorthand -> EntityService
    provide(PLATFORM_DIRECTIVES, { useValue: EntityDetail, multi: true }),
    provide(PLATFORM_DIRECTIVES, { useValue: DoNothingDirective, multi: true }),
    appRouteProviders,
    provide(PLATFORM_DIRECTIVES, { useValue: [ROUTER_DIRECTIVES], multi: true })
]);//bootstrap our whole application
