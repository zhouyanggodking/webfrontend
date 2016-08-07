import { Component, EventEmitter } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {EntityService} from './EntityService'

@Component({
    selector: 'entity',
    template:`<entity-detail [entityDetail]="entity"></entity-detail>`
})
export class Entity {
    private sub: any;
    entity: any;
    constructor(private router: Router, private route: ActivatedRoute, private entitySrv: EntityService) {
        
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id: string = params['id'];
            this.entity = this.entitySrv.getById(id);
            console.log(this.entity);
        });

        //this.router.navigate(['/about']);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
