import { Component, OnInit, Input } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite/favorite.service';
import Favorite from 'src/app/interfaces/favorite.interface';


@Component({
  selector: 'app-pokefavorite',
  templateUrl: './pokefavorite.component.html',
  styleUrls: ['./pokefavorite.component.css']
})
export class PokefavoriteComponent implements OnInit {

  @Input()
  favorite:Favorite;
  color:string =  '#aaa';
  isFavorite:boolean;

  constructor(readonly favoriteService:FavoriteService) { }

  ngOnInit(): void {}

  ngOnChanges(){
    const ele = document.getElementById('favorite');
    this.isFavorite = this.favoriteService.isFavorite(this.favorite);

    if(this.isFavorite){
      this.color = 'red';
      ele.classList.add('no-hover')
    }else{
      this.color = '#bbb';
      ele.classList.remove('no-hover')
    }
  }
  
  addToFavorite(){
    const ele = document.getElementById('favorite');
    ele.classList.add('no-hover');
    this.color = 'red';
    this.favoriteService.addFavorite(this.favorite);
  }

}
