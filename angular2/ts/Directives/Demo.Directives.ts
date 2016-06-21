import {Directive} from '@angular/core'

@Directive({
    selector: '[doNothing]'
})
export class DemoDirective {
    constructor() {
        console.log('do nothing');
    }
}