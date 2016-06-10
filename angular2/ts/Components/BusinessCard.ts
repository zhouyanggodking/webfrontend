import { Component } from '@angular/core';
@Component({
    selector: 'business-card',
    templateUrl: './template/Components/BusinessCard.template.html'
})
export class BusinessCard {
    name: string = 'GODKING';
    company: string = "ADVS";
    phone: string = "Unknown";
}