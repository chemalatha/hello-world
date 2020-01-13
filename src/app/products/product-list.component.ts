import {Component, OnInit} from '@angular/core';
import { ProductsService } from './shared/products.service';
import { IPRODUCT } from './shared/product.model';
import { AddToCartService } from '../common/addToCart.service';
import { SearchService } from '../common/search.service';

@Component({
    selector:'product-list',
    templateUrl:'./product-list.component.html'
})
export class ProductListComponent implements OnInit{
    products:IPRODUCT[];
    searchedProducts:IPRODUCT[];
    searchedText:string;
    constructor(private productsService:ProductsService,private addToCartService:AddToCartService,
                private searchService:SearchService){

    }
    ngOnInit(){
        this.searchService.searchInputChange$.subscribe(searchText=> {
            this.searchedText=searchText;
            if(this.searchedText.length>4){
                this.searchedProducts = this.products.filter(product=>{
                    return (product.name.indexOf(this.searchedText)!=-1)
                })
            } else{
                this.searchedProducts = this.products;
            }
        });
            this.productsService.getProducts().subscribe((products)=>{
                this.products = products;
                this.searchedProducts = products;
            });

        
    }
    addToCartEvent(data){
        // let addedProduct = this.products.filter((item)=>item.id==data.product.id);
        // addedProduct[0].addedToCart = data.addToCart;
        this.addToCartService.updateCartCount(data.product);
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
    ngDestroy(){
    }
}