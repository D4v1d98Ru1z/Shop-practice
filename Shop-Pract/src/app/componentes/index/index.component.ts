import { Component, OnInit } from '@angular/core';
import { MainService } from "../../service/main.service";
import { ProductService } from "../../service/product.service";
import {IndexProdService} from "../../service/index-prod.service";

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit  {

  public Minfo;
  public IndexProduct;

  constructor(private serv:MainService, private ps:ProductService, private img:DomSanitizer, private idx:IndexProdService) { }

  getBackground(image) {
    return this.img.bypassSecurityTrustStyle(`url(${image})`);
  }


  ngOnInit(){
    this.infoPrincipal();
    this.Productos();
  }

  public infoPrincipal(){
    this.serv.mainData().subscribe(data =>{
      this.Minfo = data.json();
    });
  }


  public Productos(){
    this.idx.InfoProductos().subscribe(data =>{
      this.IndexProduct = data.json();
    });
  }
}
