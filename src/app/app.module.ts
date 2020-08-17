import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CreateComponent } from './pages/create/create.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductCardComponent } from './pages/product-card/product-card.component';
import { PokemonStatisticsComponent } from './pages/detail/pokemon-statistics/pokemon-statistics.component';
import { PokemonProfileComponent } from './pages/detail/pokemon-profile/pokemon-profile.component';
import { PokemonEvolutionComponent } from './pages/detail/pokemon-evolution/pokemon-evolution.component';
import { PokemonDamageComponent } from './pages/detail/pokemon-damage/pokemon-damage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailComponent,
    CreateComponent,
    ProductListComponent,
    ProductCardComponent,
    PokemonStatisticsComponent,
    PokemonProfileComponent,
    PokemonEvolutionComponent,
    PokemonDamageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
