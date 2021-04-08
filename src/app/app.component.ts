import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import Favorite from './interfaces/favorite.interface';
import { FavoriteService } from './services/favorite/favorite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  favorites:Observable<Favorite[]>

  constructor(readonly favorite:FavoriteService){}

  ngOnInit(): void {
    this.favorites = this.favorite.listFavorites();
  }

  title = 'pokelist';
  faHeart = faHeart;
}
