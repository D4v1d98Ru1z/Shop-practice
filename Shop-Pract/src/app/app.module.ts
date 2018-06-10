  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { app_routing } from "./app.routes";

import { AppComponent } from './app.component';
import { IndexComponent } from './componentes/index/index.component';
import { ProductComponent } from './componentes/product/product.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { ServicesComponent } from './componentes/services/services.component';
import { SingleComponent } from './componentes/single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
