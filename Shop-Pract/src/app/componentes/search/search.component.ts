import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductService } from "../../service/product.service";
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import { resolve, reject } from 'q';
import { element } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  termino:string = undefined;
  private Producto:any [] = [];
  private ProductoFiltrado:any [] = [];
  //private Sproducto;

  constructor(private route:ActivatedRoute, private img:DomSanitizer, private PS:ProductService) {
    route.params.subscribe(parametros =>{
      this.termino = parametros['id'];
      this.BusquedaProducto(parametros['id']);
      console.log(this.termino);
      this.ImportacionFirebase();      
    });
   }

   getBackground(image) {
    return this.img.bypassSecurityTrustStyle(`url(${image})`);
  }

  ngOnInit() {    
    // this.BusquedaProducto();
  }

//
  private ImportacionFirebase(){
    return new Promise((resolve, reject)=>{
      this.PS.ProductData().map(response => response.json()).subscribe(data =>{
        //console.log(data);      
        this.Producto = data;
        this.BusquedaProducto(this.termino);
        resolve();
      });
    });
  }

  


  BusquedaProducto(id:string){
    //console.log("Buscando producto");
    //console.log(this.Producto,length);

    if(this.Producto.length === 0){
      this.ImportacionFirebase().then(()=>{
        this.FiltarProductos(id);
      });
    }
    else{
      this.FiltarProductos(id);
    }



    /*this.Producto.forEach(element => {
      //console.log(element);

    });*/
  }
  
  private FiltarProductos(termino:string){
    console.log(this.Producto);
    this.ProductoFiltrado = [];

    this.Producto.forEach(prod =>{
      if(prod.descripcion.indexOf(termino) >= 0){
        this.ProductoFiltrado.push(prod);
      }
    });
  }

}
