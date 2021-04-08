import { Injectable } from '@angular/core';
import Favorite from 'src/app/interfaces/favorite.interface';
import { Store } from '@ngrx/store';
import * as FavoriteActions from '../../states/actions/favorite.action';
import { AppState } from 'src/app/states/state/app.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private store:Store<AppState>) { }

  isFavorite(favorite:Favorite):boolean{
    const favorites = <Favorite[]> JSON.parse(localStorage.getItem('favorites'));
    const isfavorite = favorites.filter(f => f.id === favorite.id);
    
    return isfavorite.length?true:false;
  }

  listFavorites():Observable<Favorite[]>{
    const favorites = <Favorite[]>JSON.parse(localStorage.getItem('favorites'));

    if(favorites){
      this.store.dispatch(new FavoriteActions.RecoveryFavorites(favorites) )
    }

    return this.store.select('favorite');
  }

  addFavorite(favorite:Favorite):boolean{
    const favorites = <Favorite[]>JSON.parse(localStorage.getItem('favorites'));
    
    if(favorites){

      const isfavorite = favorites.filter((f:Favorite) => f.id===favorite.id)
    
      if(isfavorite.length){
        return false;
      }

      localStorage.setItem('favorites',JSON.stringify([...favorites,favorite]))
    }else{
      localStorage.setItem('favorites',JSON.stringify([
        {
         id:favorite.id,
         name:favorite.name,
         height:favorite.height,
         weight:favorite.weight,
         types: favorite.types,
         sprites: favorite.sprites,
         moves: favorite.moves
        }
      ]
      ))
    }    

    this.store.dispatch(new FavoriteActions.AddFavorite(favorite));
    return true
  }

  removeFavorite(id:number){
    const favorites = <Favorite[]>JSON.parse(localStorage.getItem('favorites'));

    const new_favorites = favorites.filter((favorite:Favorite) => favorite.id!==id);

    localStorage.setItem('favorites',JSON.stringify(new_favorites));

    this.store.dispatch(new FavoriteActions.RemoveFavorite(id));
  }
}
