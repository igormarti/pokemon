import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Favorite from 'src/app/interfaces/favorite.interface';
import { FavoriteService } from 'src/app/services/favorite/favorite.service';

@Component({
  selector: 'app-pokefavoritelist',
  templateUrl: './pokefavoritelist.component.html',
  styleUrls: ['./pokefavoritelist.component.css']
})
export class PokefavoritelistComponent implements OnInit {

  favorites:Array<Favorite>;
  faTrashAlt = faTrashAlt;

  constructor(readonly favoriteService:FavoriteService) { }

  ngOnInit(): void {
     this.favoriteService.listFavorites().subscribe(
       (favorites) => this.favorites = favorites,
       (err) => { console.log(err) } 
      )
  }

  removeFavorite(id:number){
    this.favorites = [];
    this.favoriteService.removeFavorite(id);
  }

}
