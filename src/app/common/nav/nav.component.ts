import {Component, Output,EventEmitter} from '@angular/core';
import { AddToCartService } from '../addToCart.service';
import { SearchService } from '../search.service';

@Component({
    selector:'nav',
    templateUrl:'./nav.component.html',
    styles:[
        `
        li{
            padding:0 10px 0 10px;
        }
        `
    ]

})
export class NavComponent{
    cartCount:number;
    onClickSearch:boolean = false;
    @Output() searchText =  new EventEmitter();
    constructor(private addToCartService:AddToCartService,private searchService:SearchService){

    }
    ngOnInit(){
        this.addToCartService.cartCountChange.subscribe(count=> this.cartCount=count);
    }
    searchProducts(event){
        console.log(event);
        this.searchService.updateSearchInput(event);
    }
}