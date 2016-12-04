import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import { Observable }     from 'rxjs/Rx';

@Injectable()
export class StockRestService {
    private sinaStockUrl: string = 'http://hq.sinajs.cn';

    constructor(private http: Http) {
    }

    getCurrentStockPriceData(code: string): Observable<Response> {
        let url = `${this.sinaStockUrl}/list=${code}`;
        return this.http.get(url);
    }
}