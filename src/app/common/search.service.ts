import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SearchService{
    private searchInputChange:Subject<string> = new Subject();
    searchInputChange$ = this.searchInputChange.asObservable();
    constructor(){

    }
    
    updateSearchInput(searchInput){
        this.searchInputChange.next(searchInput);
    }

}