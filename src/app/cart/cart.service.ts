import {Injectable} from '@angular/core';
import { IPRODUCT } from '../products';
import { ICARTITEM } from './cart.model';

@Injectable()
export class CartService{
    private cartProducts:ICARTITEM[] = [];
    constructor(){

    }
    getCartCount(){
        return this.cartProducts.length;
    }
    updateCartItems(item){
        let cartItem = this.cartProducts.filter(product => product.id == item.id);
        if(cartItem.length === 0){
            this.cartProducts.push(item);
        }
        cartItem[0].quantity = item.quantity;
    }
    updateCartProducts(addedProduct:IPRODUCT){
        let cartItem = {
            id:addedProduct.id,
            name:addedProduct.name,
            price:addedProduct.price,
            discount:addedProduct.discount,
            category:addedProduct.category,
            img_url:addedProduct.img_url,
            addedToCart:addedProduct.addedToCart,
            quantity:1
        }
        if(cartItem.addedToCart){
            this.cartProducts.push(cartItem)
        } else{
            let pos = this.cartProducts.map((p)=> {return p.id }).indexOf(cartItem.id);
            this.cartProducts.splice(pos,1);
        }
    }
    getCartProducts(){
        return this.cartProducts;
    }
    checkIfAlreadyInCart(id:number):boolean{
        let product = this.cartProducts.filter(p=>p.id === id);
        if(product.length===1) return true;
        else return false;
    }
    getCartProductById(id):ICARTITEM{
        let cartItem = this.cartProducts.filter(product => {
            if(product.id == id) return product;
        })
        return cartItem[0];
    }
    getCartProductId(id):number{
        let cartItem = this.cartProducts.filter(product => {
            if(product.id == id) return product;
        })
        return (cartItem[0])?cartItem[0].id:-1
    }
    removeProductById(id){
        this.cartProducts.splice(id,1);
        return this.cartProducts;
    }
}