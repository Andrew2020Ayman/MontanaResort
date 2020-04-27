import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { AboutComponent } from './view/about/about.component';


const routes: Routes = [
  { path: "", component:HomeComponent},
  { path: "Home", component:HomeComponent},
  { path: "about", component:AboutComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
