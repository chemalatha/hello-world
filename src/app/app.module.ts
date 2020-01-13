import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import {
  ProductListComponent,
  ProductComponent,
  ProductsService
} from './products/index';
import {
  NavComponent,
  FilterComponent,
  SearchComponent,
  SortComponent,
  HeaderComponent,
  AddToCartService,
  SearchService
} from './common/index';
import {
  CartComponent,
  CartItemComponent,
  PriceDetailsComponent,
  CartIconComponent,
  CartService
} from './cart/index';
import { ShoppingAppComponent } from './shopping-app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CartComponent,
    NavComponent,
    FilterComponent,
    SearchComponent,
    SortComponent,
    HeaderComponent,
    ProductListComponent,
    ProductComponent,
    CartItemComponent,
    PriceDetailsComponent,
    CartIconComponent,
    ShoppingAppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  schemas:[
    NO_ERRORS_SCHEMA
  ],
  providers: [
    ProductsService,
    AddToCartService,
    CartService,
    SearchService
  ],
  bootstrap: [ShoppingAppComponent]
})
export class AppModule { }