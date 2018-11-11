
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MenubarModule} from 'primeng/menubar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimauxComponent } from './animaux/animaux.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { UtilisateurFormComponent } from './utilisateur-form/utilisateur-form.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'animaux', component: AnimauxComponent },
  { path: '', component:HomeComponent},
  { path: 'ajoutAnimal', component: AnimalFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AnimalDetailComponent,
    AnimauxComponent,
    AnimalFormComponent,
    UtilisateurFormComponent,
    MenuBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
