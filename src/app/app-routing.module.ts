import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {ListeComponent} from "./Components/liste/liste.component";
import { GestionComponent } from './Components/gestion/gestion.component';
import {ContactComponent} from "./Components/contact/contact.component";




const routes: Routes = [
  { path: '', redirectTo:"/home", pathMatch:"full"},
  { path: 'home', component: HomeComponent },
  { path: 'liste', component: ListeComponent },
  { path: 'gestion', component: GestionComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
