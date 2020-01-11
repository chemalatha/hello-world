import {Component, OnInit} from '@angular/core';
import { ProductsService } from './shared/products.service';
import { IPRODUCT } from './shared/product.model';
import { AddToCartService } from '../common/addToCart.service';

@Component({
    selector:'product-list',
    templateUrl:'./product-list.component.html'
})
export class ProductListComponent implements OnInit{
    products:IPRODUCT[];
    constructor(private productsService:ProductsService,private addToCartService:AddToCartService){

    }
    ngOnInit(){
        this.productsService.getProducts().subscribe((products)=>this.products = products);
    }
    addToCartEvent(data){
        this.addToCartService.updateCartCount(data.id,data.addToCart);
    }
    sortProducts(sortOrder){
        let sortFunc;
        const ascPrice = (product1,product2)=>{
            if(product1.price>product2.price) return -1;
            else if(product1.price<product2.price) return 1;
            else return 0;
        }
        const descPrice = (product1,product2)=>{
            if(product1.price>product2.price) return -1;
            else if(product1.price<product2.price) return 1;
            else return 0;
        }
        const discount = (product1,product2)=>{
            if(product1.discount>product2.discount) return -1;
            else if(product1.discount<product2.discount) return 1;
            else return 0;
        }
        switch(sortOrder){
            case 'asc':
                sortFunc = ascPrice;
            break;
            case 'desc':
                sortFunc = descPrice;
            break;
            case 'discount':
                sortFunc = discount;
            break;
            default:
            
        }
        let tempProducts = this.products.sort((product1,product2)=>{
            return sortFunc(product1,product2);
        });
        this.products = tempProducts;
    }
    filterProducts({min,max}){
        let tempProducts = this.products.filter((product)=>{
            return (product.price>min) && (product.price<=+max)
        });
        this.products = tempProducts;
    }
}