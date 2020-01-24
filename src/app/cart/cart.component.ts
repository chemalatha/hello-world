import {Component} from '@angular/core';
import { CartService } from './cart.service';
import { ICARTITEM } from './cart.model';
import { AddToCartService } from '../common';

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
    cartItems:Array<ICARTITEM>;
    totalPrice:number = 0;
    totalDiscount:number = 0;
    totalNumOfItems:number = 0;
    constructor(private cartService:CartService,private addToCartService:AddToCartService){

    }
    ngOnInit(){
        this.cartItems = this.cartService.getCartProducts();
        this.getTotals();

    }
    productOrderDetails(data){
        this.cartService.updateCartItems(data.product);
        this.getTotals();
    }
    removeProductFromCart(data){
        // this.cartService.removeProductById(data);
        data.product.addedToCart = false;
        this.addToCartService.updateCartCount(data.product);
        this.getTotals();
        if(this.totalNumOfItems === 0){
            this.addToCartService.clearCartCount();
        }
    }
    getTotals(){
        this.totalNumOfItems = this.cartItems.reduce((sum,i)=>{
            return sum+(i.quantity)
        },0);
        this.totalDiscount = this.cartItems.reduce((sum,i)=>{
            return sum+(i.discount*i.quantity)
        },0);
        this.totalPrice = this.cartItems.reduce((sum,i)=>{
            return sum+(i.price*i.quantity)
        },0);
    }

}