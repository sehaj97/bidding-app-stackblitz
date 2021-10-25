
import { Component } from '@angular/core';
import { CurrencyTypes } from '../services/currencyTypes';
import * as $ from 'jquery';
import { Price } from '../services/price';

@Component({
  selector: 'auction-btn',
  templateUrl: '../components/currencyButton.component.html'
})
export class buySellComponent{
  title = 'biddingApp';
  constructor(public currencyTypes: CurrencyTypes, private prices: Price) {

  }
  buttons: string[] = ["Buy","Sell"];
  btn = this.buttons[0];


  bidValue: number = 0;
  BidPrice: any | {
    price: '60'
  };
  errorMessage:string | undefined;

  ngOnInit() {
    $(function(){ 
        $("#Buy").removeClass('btn-secondary text-warning');
        $("#Buy").addClass('btn-success text-white');
        
        $(".card-body #status #rand-num:eq(0)").html(randomNumber(2));
        $(".card-body #status #rand-num:eq(1)").html(randomNumber(2));
        $(".card-body #Title:eq(0)").html("Hit Bid");
        $(".card-body #Title:eq(1)").html("Join Offer");
        
        $(".card-body #rand-int:eq(0)").text(bidNumber());
        $(".card-body #rand-int:eq(1)").text(offerNumber());
        while($(".card-body #rand-int:eq(0)").text() > $(".card-body #rand-int:eq(1)").text()){
          $(".card-body #rand-int:eq(1)").text(offerNumber());
          if($(".card-body #rand-int:eq(0)").text() < $(".card-body #rand-int:eq(1)").text()){
            break
          }
        }
        

    });
  }

  checkValue(){
      if(this.btn === this.buttons[0]){
          this.btn = this.buttons[1];
          
        $(function(){ 
            $("#Sell").removeClass('btn-success');
            $("#Sell").addClass('btn-danger');
            $("#bid").val('300000');
            $("#p-text").text('Value Before Change ');
            $(".card-body #Title:eq(0)").html("Join Bid");
            $(".card-body #Title:eq(1)").html("Pay Offer");
            $(".card-body #status #rand-num:eq(0)").html(randomNumber(2));
            $(".card-body #status #rand-num:eq(1)").html(randomNumber(2));
            $(".card-body #rand-int:eq(0)").text(bidNumber());
            $(".card-body #rand-int:eq(1)").text(offerNumber());
            while($(".card-body #rand-int:eq(0)").text() < $(".card-body #rand-int:eq(1)").text()){
              $(".card-body #rand-int:eq(1)").text(offerNumber());
              if($(".card-body #rand-int:eq(0)").text() > $(".card-body #rand-int:eq(1)").text()){
                break
              }
            }
        });
      } else {
        this.btn = this.buttons[0];
            
        $(function(){ 
            $("#Buy").removeClass('btn-danger');
            $("#Buy").addClass('btn-success');
            $("#bid").val('100000');
            $("#p-text").text('Value Before Change ');
            $(".card-body #Title:eq(0)").html("Hit Bid");
            $(".card-body #Title:eq(1)").html("Join Offer");
            $(".card-body #status #rand-num:eq(0)").html(randomNumber(2));
            $(".card-body #status #rand-num:eq(1)").html(randomNumber(2));
            $(".card-body #rand-int:eq(0)").text(bidNumber());
            $(".card-body #rand-int:eq(1)").text(offerNumber());
            while($(".card-body #rand-int:eq(0)").text() > $(".card-body #rand-int:eq(1)").text()){
              $(".card-body #rand-int:eq(1)").text(offerNumber());
              if($(".card-body #rand-int:eq(0)").text() < $(".card-body #rand-int:eq(1)").text()){
                break
              }
            }
        });
      }
  }

}


function randomNumber(maxValue: number){
  return (Math.random() * maxValue).toFixed(2);
}

function bidNumber(){
  var number = randomNumber(9);
  return Math.round(parseFloat(number));
}
function offerNumber(){
  var number = randomNumber(9);
  return Math.round(parseFloat(number));
}



