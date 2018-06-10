import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }