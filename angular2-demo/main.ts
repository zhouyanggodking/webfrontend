import { bootstrap }    from '@angular/platform-browser-dynamic';
import {provide, PLATFORM_DIRECTIVES} from '@angular/core'

import { AppComponent } from './AppComponent';
import {EntityService} from './EntityService'
import {EntityDetail} from './EntityDetail'
import {DoNothingDirective} from './DoNothingDirective'

import {appRouteProviders} from './RouteConfig'
bootstrap(AppComponent, [provide(EntityService, { useClass: EntityService }),//for shorthand -> EntityService
    provide(PLATFORM_DIRECTIVES, { useValue: EntityDetail, multi: true }),
    provide(PLATFORM_DIRECTIVES, { useValue: DoNothingDirective, multi: true }),
    appRouteProviders
]);//bootstrap our whole application
