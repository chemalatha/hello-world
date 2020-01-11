import {Component} from '@angular/core';
import { CartService } from './cart.service';
import { IPRODUCT } from '../products';

@Component({
    templateUrl:'./cart.component.html',
    styles:[
        `
        row>div{
            border:1px solid orange;
        }
        `
    ]
})
export class CartComponent{
    cartItems:Array<IPRODUCT>;
    price:number = 0;
    discount:number = 0;
    numOfItems:number = 0;
    constructor(private cartService:CartService){

    }
    ngOnInit(){
        this.cartItems = this.cartService.getCartProducts();
    }
    productOrderDetails(data){
        if(data.changeType == 'add'){
            this.numOfItems += +(data.quantity);
            this.price += this.getPriceOfProduct(data.productId,+(data.quantity));
            this.discount += this.getDiscountOfProduct(data.productId,+(data.quantity));
        } else{
            this.numOfItems -= +(data.quantity);
            this.price -= this.getPriceOfProduct(data.productId,+(data.quantity));
            this.discount -= this.getDiscountOfProduct(data.productId,+(data.quantity));
        }

    }
    private getPriceOfProduct(id,quantity){
        let product = this.cartService.getCartProductById(id)[0];
        return (product.price * quantity);
    }
    private getDiscountOfProduct(id,quantity){
        let product = this.cartService.getCartProductById(id)[0];
        return (product.discount * quantity);
    }

}