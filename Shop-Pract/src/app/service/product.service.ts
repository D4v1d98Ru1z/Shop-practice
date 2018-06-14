import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( public http:Http) { 

  }

  public ProductData () {
    return this.http.get("https://shop-bc4e8.firebaseio.com/Producto.json");
  }
}
