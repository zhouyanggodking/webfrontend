import {Directive, Input} from '@angular/core'

@Directive({
    selector: '[doNothing]',
    inputs: ['text: logText']//accepts array of strings
})
export class DoNothingDirective {
    set text(value) {
        console.log(value);
    }
}
//different forms
//@Directive({
//    selector: '[doNothing]',
//    inputs: ['logText']//accepts array of strings
//})
//export class DoNothingDirective {
//    set logText(value) {
//        console.log(value);
//    }
//}

//@Directive({
//    selector: '[doNothing]'    
//})
//export class DoNothingDirective {
//    @Input('logText')
//    set text(value) {
//        console.log(value);
//    }
//}

//@Directive({
//    selector: '[doNothing]'    
//})
//export class DoNothingDirective {
//    @Input('')
//    set logText(value) {
//        console.log(value);
//    }
//}