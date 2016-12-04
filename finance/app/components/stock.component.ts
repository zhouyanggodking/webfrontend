import {Component} from '@angular/core';
import { OnInit } from '@angular/core';

import {StockBusinessService} from '../service/business/stock.business.service';
import {StockRestService} from '../service/rest/stock.rest.service';
import {Stock} from '../model/stock.model'


@Component({
    selector: 'stock',
    templateUrl: 'app/components/stock.component.html',
    styleUrls:['app/components/stock.component.css'],
    providers: [StockBusinessService, StockRestService]
})
export class StockComponent extends OnInit{

    stock: Stock = new Stock();
    constructor(private stockBusinessSrv: StockBusinessService){
        super();
    }

    ngOnInit(){
        this.stockBusinessSrv.getCurrentPriceByCode('sh601628')
        .subscribe( stock => this.stock = stock);
    }
}
