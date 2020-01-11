import {Component, Input} from '@angular/core';

@Component({
    selector:'price-details',
    templateUrl:'./price-details.component.html',
    styles:[
       
    ]
})

export class PriceDetailsComponent{
    @Input() price:number;
    @Input() discount:number;
    @Input() numOfItems:number;

}