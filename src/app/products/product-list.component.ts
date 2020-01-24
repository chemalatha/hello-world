import {Component, OnInit} from '@angular/core';
import { ProductsService } from './shared/products.service';
import { IPRODUCT } from './shared/product.model';
import { AddToCartService } from '../common/addToCart.service';
import { SearchService } from '../common/search.service';
import { CartService } from '../cart';

@Component({
    selector:'product-list',
    templateUrl:'./product-list.component.html'
})
export class ProductListComponent implements OnInit{
    products:IPRODUCT[];
    searchedProducts:IPRODUCT[];
    searchedText:string;
    constructor(private productsService:ProductsService,private addToCartService:AddToCartService,
                private searchService:SearchService, private cartService:CartService){

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
                this.sortProducts('desc');
            });

        
    }
    addToCartEvent(data){
        this.addToCartService.updateCartCount(data.product);
    }
    sortProducts(sortOrder){
        let sortFunc;
        const ascPrice = (product1,product2)=>{
            return (product1.price-product2.price);
        }
        const descPrice = (product1,product2)=>{
            return (product2.price-product1.price);
        }
        const discount = (product1,product2)=>{
            return (product2.discount-product1.discount);
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
        console.log([tempProducts]);
        this.searchedProducts = tempProducts;
    }
    filterProducts({min,max}){
        let tempProducts = this.products.filter((product)=>{
            return (product.price>min) && (product.price<=+max)
        });
        console.log([tempProducts])
        this.searchedProducts = tempProducts;
    }
    ngDestroy(){
    }
}