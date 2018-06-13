import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {


  constructor( public http:Http ) { 
    this.mainData();
  }

  public mainData () {
    return this.http.get("https://shop-bc4e8.firebaseio.com/Minfo.json");
  }
}
