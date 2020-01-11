import {Injectable} from '@angular/core';
import { IPRODUCT } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService{

    getProducts():Observable<IPRODUCT[]> {
        return this.http.get<IPRODUCT[]>('https://api.myjson.com/bins/qzuzi');
    }
    constructor(private http: HttpClient) {

     }
}

