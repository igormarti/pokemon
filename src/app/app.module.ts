import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';

import {reducerFavorite} from 'src/app/states/reducers/favorite.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemontableComponent } from './components/pokemontable/pokemontable.component';
import { PokefavoriteComponent } from './components/pokefavorite/pokefavorite.component';
import { PokefavoritelistComponent } from './components/pokefavoritelist/pokefavoritelist.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemontableComponent,
    PokefavoriteComponent,
    PokefavoritelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    StoreModule.forRoot({favorite:reducerFavorite}),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
