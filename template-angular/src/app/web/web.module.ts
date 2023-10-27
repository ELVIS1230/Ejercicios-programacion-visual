import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';



@NgModule({
  declarations: [
    ProductComponent,
    CategoryComponent,
    DashboardComponent,
    NoPageFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class WebModule { }
