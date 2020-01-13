import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import {CartService} from '../cart/index';
import { IPRODUCT } from '../products';

@Injectable()
export class AddToCartService{
    public cartCountChange:Subject<number> = new Subject();

    constructor(private cartService:CartService){

    }
    
    updateCartCount(product:IPRODUCT){
        this.cartService.updateCartProducts(product);
        this.cartCountChange.next(this.cartService.getCartCount());
    }
    updateCartCountOnly(count){
        this.cartCountChange.next(count);
    }
    clearCartCount(){
        this.cartCountChange.next(0);
    }
}