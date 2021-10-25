import { Component } from '@angular/core';
import { Price } from '../services/price';

@Component({
  selector: 'offer-tile',
  templateUrl: '../components/priceTile.component.html'
})
export class OfferTileComponent {
  
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
          $(".card-body #price:eq(1)").text(this.bidValue);
          setInterval(() => {         
            this.bidValue++;
            $(".card-body #price:eq(1)").text(this.bidValue);
          }, 15000);
        }
      )
      
    $(function(){ 
        $(".card-body div:eq(1)").addClass('text-danger');
    });
}
}
