import { Component, OnInit } from '@angular/core';
import { MainService } from "../../service/main.service";
import { ProductService } from "../../service/product.service";

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit  {

  public Minfo;
  public Producto;

  constructor(private serv:MainService, private ps:ProductService, private img:DomSanitizer) { }

  getBackground(image) {
    return this.img.bypassSecurityTrustStyle(`url(${image})`);
  }


  ngOnInit(){
    this.infoPrincipal();
    this.infoProductos();
  }

  public infoPrincipal(){
    this.serv.mainData().subscribe(data =>{
      this.Minfo = data.json();
    });
  }

  public infoProductos(){
    this.ps.ProductData().subscribe(data =>{
      console.log(data.json());
      this.Producto = data.json();
    });
  }
}
