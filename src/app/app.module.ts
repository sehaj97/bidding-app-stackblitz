import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component.ts/app.component';
import { buySellComponent } from './component.ts/buySell.component';
import { currencyButtonComponent } from './component.ts/currencyButton.component';
import {  currencyDropdownComponent } from './component.ts/currencyDropdown.component';
import { BidTileComponent } from './component.ts/bidTile.component';
import { inputNumberComponent } from './component.ts/inputNumber.component';
import {  orderDropdownComponent } from './component.ts/order.component';
import { OfferTileComponent } from './component.ts/offerTile.component';
import { ResetComponent } from './component.ts/reset.component';
@NgModule({
  declarations: [
    AppComponent,
    currencyDropdownComponent,
    orderDropdownComponent,
    currencyButtonComponent,
    buySellComponent,
    inputNumberComponent,
    BidTileComponent,
    OfferTileComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    currencyDropdownComponent,
    orderDropdownComponent,
    currencyButtonComponent,
    buySellComponent,
    inputNumberComponent,
    BidTileComponent,
    OfferTileComponent,
    ResetComponent
  ],
})
export class AppModule { }
