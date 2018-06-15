import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../service/product.service";

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  public Producto;
  constructor(private ps:ProductService, private img:DomSanitizer) {}

  getBackground(image) {
    return this.img.bypassSecurityTrustStyle(`url(${image})`);
  }

  ngOnInit() {
    this.ps.ProductData().subscribe(data =>{
      console.log(data.json());
      this.Producto = data.json();
    });
  }

}
