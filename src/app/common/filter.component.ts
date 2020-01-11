import {Component, Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'filter-by',
    templateUrl:'./filter.component.html'
})
export class FilterComponent{
    @Input() minPrice:number;
    @Input() maxPrice:number;
    @Output() sliderValueChanged = new EventEmitter();
    sliderChange(event){
        console.log(event.target.value);
        this.sliderValueChanged.emit({min:1,max:event.target.value});
    }
}