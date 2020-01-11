import {Injectable} from '@angular/core';
import { IPRODUCT } from '../products';

@Injectable()
export class CartService{
    private cartCount:number = 0;
    private cartProductIds:number[] = [];
    constructor(){

    }
    updateCartCount(addToCart:boolean){
        (addToCart)?(++this.cartCount):(--this.cartCount);
    }
    getCartCount(){
        return this.cartCount;
    }
    updateCartProducts(productId:number,addToCart:boolean){
        (addToCart)?(
            this.cartProductIds.push(productId)
            ):(
            this.cartProductIds.splice(this.cartProductIds.indexOf(productId),1)
        );
    }
    getCartProducts(){
        return PRODUCTS.filter(product=>{
            if(this.cartProductIds.indexOf(product.id)!=-1) return product;
        })
    }
    getCartProductById(id){
        return PRODUCTS.filter(product=>{
            if(this.cartProductIds.indexOf(id)!=-1) return product;
        })
    }
}
const PRODUCTS:IPRODUCT[] = [{ "id": 9090, "name": "Item1", "price": 200, "discount": 10, "category": "fiction", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9091, "name": "Item2", "price": 250, "discount": 15, "category": "literature", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9092, "name": "Item3", "price": 320, "discount": 5, "category": "literature", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9093, "name": "Item4", "price": 290, "discount": 0, "category": "thriller", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9094, "name": "Item1", "price": 500, "discount": 25, "category": "thriller", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9095, "name": "Item2", "price": 150, "discount": 5, "category": "literature", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9096, "name": "Item3", "price": 700, "discount": 22, "category": "literature", "img_url": "http://lorempixel.com/500/600/technics/" }, { "id": 9097, "name": "Item4", "price": 350, "discount": 18, "category": "fiction", "img_url": "http://lorempixel.com/500/600/technics/" }]