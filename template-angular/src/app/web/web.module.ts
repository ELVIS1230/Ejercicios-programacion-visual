import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { WebRoutingRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ProductComponent,
    CategoryComponent,
    DashboardComponent,
    NoPageFoundComponent,
    WebComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    WebRoutingRoutingModule
  ],
  exports: [
    WebComponent,
    ProductComponent,
    CategoryComponent,
    DashboardComponent,
    NoPageFoundComponent,
    WebRoutingRoutingModule

  ]
})
export class WebModule { }
