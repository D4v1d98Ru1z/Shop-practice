import{ RouterModule, Routes } from "@angular/router";
import { IndexComponent, ProductComponent } from "./componentes/index.paginas";

const app_routes: Routes = [
    {path: 'index', component: IndexComponent },
    { path: 'product', component: ProductComponent },
    { path: '', pathMatch: 'full', redirectTo: 'index' }
];

export const app_routing = RouterModule.forRoot(app_routes);