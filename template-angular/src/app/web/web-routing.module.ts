import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { WebComponent } from './web.component';


const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent ,
  children: [
  // {path: '', component: DashboardComponent},
  {path: 'product', component: ProductComponent},
  {path: 'category' , component: CategoryComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingRoutingModule { }
