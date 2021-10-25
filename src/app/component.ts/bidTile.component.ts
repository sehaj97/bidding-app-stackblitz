import { Component } from '@angular/core';
import { IPrice } from '../interface/price';
import { Price } from '../services/price';

@Component({
  selector: 'bid-tile',
  templateUrl: '../components/priceTile.component.html'
})
export class BidTileComponent {
  title = 'biddingApp';
  bidValue: number = 0;
  BidPrice: any | {
    price: '60'
  };
  errorMessage:string | undefined;

  constructor(private prices: Price) {}
  ngOnInit() {
    this.prices.getPrice().subscribe(
      (response) => {
        this.BidPrice = response;
        this.bidValue = parseFloat(this.BidPrice.price);
        $(".card-body #price:eq(0)").text(this.bidValue);
        setInterval(() => {         
          this.bidValue++;
          $(".card-body #price:eq(0)").text(this.bidValue);
        }, 14000);
      }
    )
    $(function(){ 
        $(".card-body div:eq(0)").addClass('text-success');
    });
  }
  
}
