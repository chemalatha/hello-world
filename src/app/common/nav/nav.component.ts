import {Component, Output,EventEmitter} from '@angular/core';
import { AddToCartService } from '../addToCart.service';

@Component({
    selector:'nav',
    templateUrl:'./nav.component.html'

})
export class NavComponent{
    cartCount:number;
    onClickSearch:boolean = false;
    constructor(private addToCartService:AddToCartService){

    }
    ngOnInit(){
        this.addToCartService.cartCountChange.subscribe(count=> this.cartCount=count);
    }
    searchProducts(event){
        console.log(event.target.value);
    }
}