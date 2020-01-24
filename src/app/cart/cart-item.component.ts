import {Component, Input, Output,EventEmitter} from '@angular/core';
import { ICARTITEM } from './cart.model';

@Component({
    selector:'cart-item',
    templateUrl:'./cart-item.component.html',
    styles:[
        `
        .product-image{
            height:100px
        }
        span{
            padding-right:5px;
        }
        a.fa-plus{
            padding-right:20px
        }
        a.fa-minus{
            padding-left:20px
        }
        `
    ]
})
export class CartItemComponent{
    @Input() product:ICARTITEM;
    quantity:number =1;
    @Output() productQuantity = new EventEmitter();
    @Output() removeProduct = new EventEmitter();
    quantityChange(event){
        this.productQuantity.emit({quantity:event.target.value,product:this.product,changeType:'input'});

    }
    changeQuantity(changeType){
        if(changeType == "add"){
            this.product.quantity += 1;
        } else{
            if(this.product.quantity>0) this.product.quantity = this.product.quantity-1;
        }
        // this.product.quantity = (changeType==="add")?(this.product.quantity+1):(this.product.quantity-1)
        // // this.product.quantity += (changeType)?1:-1;
        this.productQuantity.emit({product:this.product,changeType});
    }
    removeItemFromCart(product){
        console.log(product);
        this.removeProduct.emit({product:product});
    }

}
