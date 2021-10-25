
import { Component } from '@angular/core';
import { CurrencyTypes } from '../services/currencyTypes';

@Component({
  selector: 'cur-btn',
  templateUrl: '../components/currencyButton.component.html'
})
export class currencyButtonComponent{
  title = 'biddingApp';
  constructor(public currencyTypes: CurrencyTypes) {

  }
  buttons: string[] = [];
  btn = ""
      
  ngOnInit() {
          
    $(function(){ 
      $(".card-body #status #rand-num:eq(0)").html(randomNumber(2));
      $(".card-body #status #rand-num:eq(1)").html(randomNumber(2));
  });
    this.currencyTypes.types.subscribe(s=> {
      this.buttons = s;
      this.btn = this.buttons[0];
    });
  }
  
  ngOnDestroy() {
    this.currencyTypes.types.unsubscribe();
  }
  checkValue(){
      if(this.btn === this.buttons[0]){
          this.btn = this.buttons[1];
          $(function(){ 
            $(".card-body #status #rand-num:eq(0)").html(randomNumber(2));
            $(".card-body #status #rand-num:eq(1)").html(randomNumber(2));
        });
      } else {
        this.btn = this.buttons[0];
        $(function(){ 
          $(".card-body #status #rand-num:eq(0)").html(randomNumber(2));
          $(".card-body #status #rand-num:eq(1)").html(randomNumber(2));
      });
      }
  }

}


function randomNumber(maxValue: number){
  return (Math.random() * maxValue).toFixed(2);
}



