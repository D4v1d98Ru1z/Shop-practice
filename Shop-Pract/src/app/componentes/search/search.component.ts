import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductService } from "../../service/product.service";
//import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  termino:string = undefined;
  private Producto:any [] = [];
  //private Sproducto;

  constructor(private route:ActivatedRoute, private PS:ProductService) {
    route.params.subscribe(parametros =>{
      this.termino = parametros['id'];
      console.log(this.termino);
      this.BusquedaProducto(this.termino);
    });
   }

   BusquedaProducto(id:string){
    console.log("Buscando producto");
    console.log(this.Producto.length);
    this.Producto.forEach(element => {
      console.log(element);
    });
  }

  ngOnInit() {
    this.ImportacionFirebase();
  }

  ImportacionFirebase(){
    this.PS.ProductData().subscribe(data =>{
    console.log(data.json());
    this.Producto = data.json();
    });
  }

  

}
