import { Component } from '@angular/core';

@Component({
  selector: 'input-number',
  templateUrl: '../components/inputNumber.component.html'
})
export class inputNumberComponent {
  title = 'biddingApp';
  valuePrice = "100000";
  priceText = "Value: ";
  onChange(){
    $("#p-text").text('Value: ');
  }
}
