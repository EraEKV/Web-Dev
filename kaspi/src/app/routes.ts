import { Routes } from "@angular/router";
import { DetailsComponent } from "./details/details.component";
import { ProductsComponent } from "./products/products.component";


export const routeConfig: Routes = [
  {
    path: '',
    component: ProductsComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Product details',
  },
];
