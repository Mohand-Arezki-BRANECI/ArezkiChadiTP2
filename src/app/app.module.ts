import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListeComponent } from './liste/liste.component';
import { GestionComponent } from './gestion/gestion.component';

const routes: Routes = [
  { path: '', redirectTo:"/home", pathMatch:"full"},
  { path: 'home', component: HomeComponent },
  { path: 'liste', component: ListeComponent },
  { path: 'gestion', component: GestionComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListeComponent,
    GestionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
