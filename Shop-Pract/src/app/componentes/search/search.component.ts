import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductService } from "../../service/product.service";
//import { DomSanitizer } from '@angular/platform-browser
import 'rxjs/add/operator/map';
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
      this.ImportacionFirebase();      
    });
   }

   

  ngOnInit() {
    
    // this.BusquedaProducto();
  }
// 
  ImportacionFirebase(){
    this.PS.ProductData().map(response => response.json()).subscribe(data =>{
      console.log(data);      
      this.Producto = data;
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
  

}
