import {Component} from '@angular/core';


@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent{
    stockCodeList = [
        'sh601628', 'sh601318', 'sh601601', 'sh601766', 'sh601336',
        'sh600356', 'sh600839'
    ];
}
