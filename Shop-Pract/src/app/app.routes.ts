import{ RouterModule, Routes } from "@angular/router";
import { IndexComponent, ProductComponent, SearchComponent } from "./componentes/index.paginas";
import { AboutComponent } from "./componentes/about/about.component";
import { ContactComponent } from "./componentes/contact/contact.component";
import { ServicesComponent } from "./componentes/services/services.component";
import { SingleComponent } from "./componentes/single/single.component";

const app_routes: Routes = [
    {path: 'index', component: IndexComponent },
    { path: 'product', component: ProductComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'services', component: ServicesComponent },
    { path: 'single', component: SingleComponent},
    { path: 'search/:id', component: SearchComponent }, //id para generar una ruta interna en la busqueda
    { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

export const app_routing = RouterModule.forRoot(app_routes);