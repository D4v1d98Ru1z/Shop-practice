  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { app_routing } from "./app.routes";

import { AppComponent } from './app.component';
import { IndexComponent } from './componentes/index/index.component';
import { ProductComponent } from './componentes/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
