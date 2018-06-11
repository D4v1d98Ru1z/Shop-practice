import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  info:any [] = [];
  carga:boolean = false;

  constructor( public http:Http ) { 
    this.mainData();
  }

  public mainData () {
    this.http.get("https://shop-bc4e8.firebaseio.com/Minfo.json").subscribe(data =>{
        console.log(data.json());
        this.carga = true;
        this.info = data.json();
    });
  }
}
