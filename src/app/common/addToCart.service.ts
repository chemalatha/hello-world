import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import {CartService} from '../cart/index';

@Injectable()
export class AddToCartService{
    public cartCountChange:Subject<number> = new Subject();

    constructor(private cartService:CartService){

    }
    updateCartCount(productId:number,addToCart:boolean){
        this.cartService.updateCartCount(addToCart);
        this.cartService.updateCartProducts(productId,addToCart);
        this.cartCountChange.next(this.cartService.getCartCount());
    }

}