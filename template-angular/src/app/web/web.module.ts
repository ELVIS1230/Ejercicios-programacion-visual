import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    ProductComponent,
    CategoryComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WebModule { }
