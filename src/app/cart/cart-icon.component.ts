import {Component, Input} from '@angular/core';

@Component({
    selector:'cart-icon',
    template:`<a class="fa fa-shopping-cart" [routerLink]="['/cart']"></a>
        <div *ngIf="cartCount>0" style="display:inline-block"class="count-class">{{cartCount}}</div>
    `,
    styles:[
        `
        .count-class{
            border-radius:50%;
            border:1px solid white;
            height:20px;
            width:20px;
            text-align:center;
        }
        a{
            line-height: 40px;
            font-size:19px;
        }
        `
    ]
})
export class CartIconComponent{
    @Input() cartCount:number;
}