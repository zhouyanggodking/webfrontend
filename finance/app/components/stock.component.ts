import {Component, Input, OnInit} from '@angular/core';

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
    @Input() stockCode: string;

    stock: Stock = new Stock();
    
    constructor(private stockBusinessSrv: StockBusinessService){
        super();
    }

    ngOnInit(){
        this.stockBusinessSrv.getCurrentPriceByCode(this.stockCode)
        .subscribe( stock => this.stock = stock);
    }

    get sentiment(): string{
        if(this.stock.delta > 0){
            return 'positive-sentiment';
        }else if(this.stock.delta < 0){
            return 'negative-sentiment';
        }else{
            return 'neutral-sentiment';
        }
    }

    get arrowClass(): string{
        if(this.stock.delta > 0){
            return 'glyphicon-arrow-up';
        }else if(this.stock.delta < 0){
            return 'glyphicon-arrow-down';
        }else{
            return '';
        }
    }
}
