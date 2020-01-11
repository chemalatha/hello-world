import {Component, Output,EventEmitter} from '@angular/core';

@Component({
    selector:'sort-by',
    templateUrl:'./sort.component.html',
    styles:[
        `
        .sort-order{
            color:orange;
            text-decoration:underline
        }
        a{
            text-decoration:none;
            color:white;
        }
        `
    ]
})
export class SortComponent{
    sortOrder = TYPESOFSORT[0];
    @Output() sortOrderType = new EventEmitter();
    constructor(){

    }
    sortBy(sortOrder){
        this.sortOrder = sortOrder;
        this.sortOrderType.emit(sortOrder);
    }
}

const TYPESOFSORT = [
    'desc',
    'asc',
    'discount'
]