import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {ListComponent} from "./Components/list/list.component";
import { GestionComponent } from './Components/gestion/gestion.component';
import {ContactComponent} from "./Components/contact/contact.component";




const routes: Routes = [
  { path: '', redirectTo:"/home", pathMatch:"full"},
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'gestion', component: GestionComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
