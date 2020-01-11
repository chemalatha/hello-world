import { Routes } from '@angular/router';
import { ProductListComponent } from './products';
import { CartComponent, CartItemComponent } from './cart';

export const appRoutes:Routes = [
    {path:'cart',component:CartComponent},
    {path:'products',component:ProductListComponent},
    {path:'',redirectTo:'/products',pathMatch:'full'},
]