import {Customer} from '../model/customer'
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerListService{
    get(): Customer[]{
        let customerArr: Customer[] = [
            {
                id: '1',
                name: 'god',
                email: 'god@gmail.com',
                phone: '123456' 
            },{
                id: '2',
                name: 'ocean',
                email: 'ocean@gmail.com',
                phone: ''
            }
        ];

        return customerArr;
    }
}