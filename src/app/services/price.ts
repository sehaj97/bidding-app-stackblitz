import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Price {

  constructor(private httpClient: HttpClient) { }

  getPrice(){
    return this.httpClient.get('https://run.mocky.io/v3/576a8a7b-f1c8-4769-9196-bbd96f0cd645');
  }
}