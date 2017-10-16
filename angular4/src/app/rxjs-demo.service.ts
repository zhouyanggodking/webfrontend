import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/skip';

import 'rxjs/add/observable/from';

@Injectable()
export class RxjsDemoService {

  constructor() { }

  //creation
  creation(): void{
    // Observable.create((observer: Observer<string>) =>{
    //   observer.next('hello');
    //   observer.next('world');
    // }).subscribe(console.log);

    //Observable.of('hello', 'world').subscribe(console.log);
    Observable.from(['HELLO', 'WORLD']).subscribe(console.log);
  }

  //common operators
  commonOperators(){
    Observable.of(1,2,3,4,5).map((val)=> val * val).subscribe(console.log);

    Observable.of(6,7,8,9,10).mapTo(1000).subscribe(console.log);

    Observable.from([1,2,3,4,5]).filter((val) => val > 3).subscribe(console.log);

    Observable.from([1,2,3,4,5]).scan((acc, val) => acc + val).subscribe(console.log);
    
    Observable.from([1,2,3,4,5]).skip(3).subscribe(console.log);
  }

}
