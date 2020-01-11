import {Component, Input, Output,EventEmitter} from '@angular/core';
import { IPRODUCT } from '../products';

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
    @Input() product:IPRODUCT;
    quantity:number =1;
    @Output() productQuantity = new EventEmitter();

    quantityChange(event){
        this.productQuantity.emit({quantity:event.target.value,productId:this.product.id});

    }
    changeQuantity(changeType){
        this.quantity += (changeType)?1:-1;
        this.productQuantity.emit({quantity:this.quantity,productId:this.product.id,changeType});
    }

}
