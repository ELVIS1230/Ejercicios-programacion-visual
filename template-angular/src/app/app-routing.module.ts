import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageFoundComponent } from './web/no-page-found/no-page-found.component';
import { WebRoutingRoutingModule } from './web/web-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
// {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
{path: '**', component: NoPageFoundComponent},
]
@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    // WebModule,
    WebRoutingRoutingModule, 
    AuthRoutingModule,
  ],
  exports: [RouterModule,
]
})
export class AppRoutingModule { }
