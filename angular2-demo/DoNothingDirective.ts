import {Directive} from '@angular/core'

@Directive({
    selector: '[doNothing]'
})
export class DoNothingDirective {
    constructor() {
        console.log('do nothing');
    }
}