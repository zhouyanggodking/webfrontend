import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs/Observable';

export class MockCustomerDbService implements InMemoryDbService {
    createDb(): {} | Observable<{}> | Promise<{}> {
        let customers: Customer[] = [
            {
                id: '1',
                name: 'god',
                email: 'god@gmail.com',
                phone: '123456'
            }, {
                id: '2',
                name: 'ocean',
                email: 'ocean@gmail.com',
                phone: 'test-phone'
            }];
        return { customers };
    }

}