import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../service/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  public Producto;
  constructor(private ps:ProductService) { }

  ngOnInit() {
    this.ps.ProductData().subscribe(data =>{
      console.log(data.json());
      this.Producto = data.json();
    });
  }

}
