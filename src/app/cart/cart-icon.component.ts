import {Component, Input} from '@angular/core';

@Component({
    selector:'cart-icon',
    templateUrl:'./cart-icon.component.html',
    styles:[
        `
        .count-class{
            border-radius:50%;
            border:1px solid black;
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