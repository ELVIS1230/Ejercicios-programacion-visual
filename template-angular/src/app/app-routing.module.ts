import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageFoundComponent } from './web/no-page-found/no-page-found.component';
import { WebRoutingRoutingModule } from './web/web-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';


const routes: Routes = [
{path: '', redirectTo:'/dashboard', pathMatch: 'full'},
// {path:'dashboard' ,loadChildren: () => import('./web/web-routing.module').then(m =>m.WebRoutingRoutingModule)},
// {path:'dashboard' ,loadChildren: () => WebRoutingRoutingModule},
// { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
// { path: 'register', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
{path: '**', component: NoPageFoundComponent},
]
@NgModule({

  imports: [
    RouterModule.forRoot(routes),
    WebRoutingRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
