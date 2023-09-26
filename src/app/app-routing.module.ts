import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListeComponent} from "./liste/liste.component";
import { GestionComponent } from './gestion/gestion.component';
import {ContactComponent} from "./contact/contact.component";




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
