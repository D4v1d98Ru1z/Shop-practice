import{ RouterModule, Routes } from "@angular/router";

const app_routes: Routes = [
    {path: '', component: Compomemt },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);