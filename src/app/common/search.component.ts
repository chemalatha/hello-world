import {Component,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'search-icon',
    templateUrl:'./search.component.html',
    styles:[
        `
        .count-class{
            border-radius:50%;
            border:1px solid white;
            height:15px;
        }
        a{
            line-height: 40px;
            font-size:19px;
        }
        `
    ]
})
export class SearchComponent{
    onClickSearch:boolean = true;
    @Output() searchInput = new EventEmitter();
    searchProducts(event){
        console.log(event.target.value);
        this.searchInput.emit(event.target.value);
    }
}