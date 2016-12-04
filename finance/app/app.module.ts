import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {StockComponent} from './components/stock.component';

@NgModule({
    imports: [//a list of other module which are available to this module
        BrowserModule,
        HttpModule
    ],
    declarations: [//a list of directives/pipes belong to this module
        AppComponent,
        StockComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
