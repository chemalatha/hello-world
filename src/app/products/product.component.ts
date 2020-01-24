import {Component, Input, Output,EventEmitter} from '@angular/core';
import { IPRODUCT } from './shared/product.model';
import { Router } from '@angular/router';
import { CartService } from '../cart';

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
    constructor(private router:Router,private cartService:CartService){

    }
    ngOnInit(){
        this.addedToCart = this.cartService.checkIfAlreadyInCart(this.product.id);
    }
    addToCart(product,addedToCart){
        product.addedToCart = addedToCart; 
        this.addedToCart = addedToCart;
        this.addToCartEvent.emit({product});
    }
}