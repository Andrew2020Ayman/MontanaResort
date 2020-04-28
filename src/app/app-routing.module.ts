import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { AboutComponent } from './view/about/about.component';
import { RoomsComponent } from './view/rooms/rooms.component';
import { ContactComponent } from './view/contact/contact.component';


const routes: Routes = [
  { path: "", component:HomeComponent},
  { path: "Home", component:HomeComponent},
  { path: "about", component:AboutComponent},
  {path:"Rooms",component:RoomsComponent},
  {path:"Contact" , component:ContactComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
