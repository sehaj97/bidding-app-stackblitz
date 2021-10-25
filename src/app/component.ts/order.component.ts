
import { Component } from '@angular/core';
import { IOption } from '../interface/option';
import { CurrencyTypes } from '../services/currencyTypes';

@Component({
  selector: 'order-dropdown',
  templateUrl: '../components/biddingDropdown.component.html'
})
export class orderDropdownComponent{
  title = 'biddingApp';
  options: IOption[] = 
    [
      {
        val : "Limit"
      },
      {
        val : "Stop"
      },
      {
        val : "Call"
      },
      {
        val : "If Done"
      }
    ];
  onChange(event: any){
    event.stopPropagation();
    console.log(event.currentTarget.value);
   }
}


