import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PeopleComponent } from './people/people.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SpeciesComponent } from './species/species.component';
import { PlanetsComponent } from './planets/planets.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: 'films', component: FilmsComponent }];

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    PeopleComponent,
    StarshipsComponent,
    VehiclesComponent,
    SpeciesComponent,
    PlanetsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
