import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import { Observable }     from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {StockRestService} from '../rest/stock.rest.service';
import {Stock} from '../../model/stock.model'

@Injectable()
export class StockBusinessService {

    constructor(private stockRestSrv: StockRestService) {
    }

    getCurrentPriceByCode(code: string): Observable<Stock> {
        return this.stockRestSrv.getCurrentStockPriceData(code)
        .map(response => {
            let textArr = response.text().split('"');
            let dataArr = textArr[1].split(',');

            let stock = new Stock();
            stock.name= dataArr[0];
            stock.code = code;
            stock.startPrice = +dataArr[1];
            stock.endPrice = +dataArr[2];
            stock.currentPrice = +dataArr[3];
            stock.highestPrice = +dataArr[4];
            stock.lowestPrice = +dataArr[5];
            stock.delta = stock.currentPrice - stock.endPrice;
            stock.deltaRatio = stock.delta/stock.endPrice * 100;
            stock.exchangeShares = +dataArr[8];
            stock.volume = +dataArr[9];
            stock.date = dataArr[30];
            stock.time = dataArr[31];

            return stock;
        });        
    }
}