import {Component, Input, Output,EventEmitter} from '@angular/core';
import { IPRODUCT } from './shared/product.model';
import { Router } from '@angular/router';

@Component({
    selector:'product',
    templateUrl:'./product.component.html',
    styles:[
        `
        .product-image{
            height:100px;
        }
        span{
            padding-right:5px;
        }
        `
    ]
})
export class ProductComponent{
    @Input() product:IPRODUCT;
    @Output() addToCartEvent = new EventEmitter<any>();
    addedToCart:boolean = false;
    constructor(private router:Router){

    }
    addToCart(product,addedToCart){
        product.addedToCart = addedToCart; 
        this.addToCartEvent.emit({product});
    }
}