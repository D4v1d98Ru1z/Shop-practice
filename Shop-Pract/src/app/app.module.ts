  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { app_routing } from "./app.routes";

//Services
import { MainService } from "./service/main.service";
import { ProductService } from "./service/product.service";
import { JsonGeneralService } from "./service/json-general.service";
import { HttpModule } from "@angular/http";

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
    HttpModule,
    app_routing
  ],
  providers: [
    MainService, 
    ProductService,
    JsonGeneralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
