import { Component, OnInit } from '@angular/core';
import { MainService } from "../../service/main.service";
import {IndexProdService} from "../../service/index-prod.service";
import { JsonGeneralService } from "../../service/json-general.service";

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit  {

  public Minfo;
  public IndexProducto;
  public jInfo;

  constructor(private serv:MainService, private img:DomSanitizer, private idx:IndexProdService, private jso:JsonGeneralService) { }

  getBackground(image) {
    return this.img.bypassSecurityTrustStyle(`url(${image})`);
  }
  s:boolean = false;

  ngOnInit(){
    this.infoPrincipal();
    this.Productos();
    this.jsoInfo();
  }

  public infoPrincipal(){
    this.serv.mainData().subscribe(data =>{
      this.Minfo = data.json();
    });
  }


  public Productos(){
    this.idx.InfoProductos().subscribe(data =>{
      this.IndexProducto = data.json();
    });
  }

  public jsoInfo()
  {
    this.jso.llamada().subscribe(data=>{
      console.log(data.json());
      this.jInfo = data.json();
      this.s = true;
    });
  }
}
