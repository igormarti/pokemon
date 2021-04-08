import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PokefavoritelistComponent} from './components/pokefavoritelist/pokefavoritelist.component';
import {PokemonComponent} from './components/pokemon/pokemon.component';;

const routes: Routes = [
  {
    path: '',
    component: PokemonComponent
  },
  {
    path: 'favorites',
    component: PokefavoritelistComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
