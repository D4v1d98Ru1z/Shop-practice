import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class IndexProdService {

  constructor(public http:Http) { 
    this.InfoProductos();
  }

  public InfoProductos () {
    return this.http.get("https://shop-bc4e8.firebaseio.com/IndexProduct.json");
  }
}
