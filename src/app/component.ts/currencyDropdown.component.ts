
import { Component } from '@angular/core';
import { IOption } from '../interface/option';
import { CurrencyTypes } from '../services/currencyTypes';

@Component({
  selector: 'currency-dropdown',
  templateUrl: '../components/biddingDropdown.component.html'
})
export class currencyDropdownComponent{
  title = 'biddingApp';
  options: IOption[] = 
    [
      {
        val : "EUR/USD"
      },
      {
        val : "EUR/GBP"
      },
      {
        val : "USD/CAD"
      },
      {
        val : "AUD/CAD"
      },
      {
        val : "USD/JPY"
      }
    ];
    constructor(public currencyTypes: CurrencyTypes) {

    }
    
  onChange(e: any){
    e.stopPropagation()
    this.currencyTypes.changeState(e.currentTarget.value.split("/"));
    $(function(){ 
      $(".card-body #status #rand-num:eq(0)").html(randomNumber(2));
      $(".card-body #status #rand-num:eq(1)").html(randomNumber(2));
  });
   }
      
  ngOnInit() {
    this.currencyTypes.types.subscribe(s => {s});
  }
  
  ngOnDestroy() {
    this.currencyTypes.types.unsubscribe();
  }
}


function randomNumber(maxValue: number){
  return (Math.random() * maxValue).toFixed(2);
}
