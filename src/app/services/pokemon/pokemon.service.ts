import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import Pokemon from 'src/app/interfaces/pokemon.interface';
import config from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(public http:HttpClient) { }



  getPokemon(name_id:string|number):Observable<Pokemon>{
    return this.http.get<Pokemon>(`${config.baseUrl}/${name_id}`);
  }


}
