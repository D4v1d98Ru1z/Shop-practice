import { Component, OnInit } from '@angular/core';
import { MainService } from "../../service/main.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit  {

  public Minfo;

  constructor(private serv:MainService) { }

  ngOnInit(){
    this.serv.mainData().subscribe(data =>{
      this.Minfo = data.json();
    });
  }
}
