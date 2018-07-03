import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class JsonGeneralService {

  constructor(public http:Http) { 
    this.llamada();
  }

  public llamada(){
    return this.http.get("./assets/jsons/general-info.json");
  }
}
