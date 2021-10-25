
import { Component } from '@angular/core';

@Component({
  selector: 'reset-btn',
  templateUrl: '../components/reset.component.html'
})
export class ResetComponent{
  title = 'biddingApp';
  reset(){
    window.location.reload();
   }
}


