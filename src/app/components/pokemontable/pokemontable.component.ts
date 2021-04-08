import { Component, OnInit ,Input } from '@angular/core';
import Favorite from 'src/app/interfaces/favorite.interface';

@Component({
  selector: 'app-pokemontable',
  templateUrl: './pokemontable.component.html',
  styleUrls: ['./pokemontable.component.css']
})
export class PokemontableComponent implements OnInit {

  @Input()
  data:Favorite;

  id:number;
  name:string;
  img: string;
  weight:string;
  height:string;
  types: Array<any>;
  skills: Array<any>;

  constructor() { 
   
  }

  ngOnInit():any {
  
  }

  ngOnChanges():any {
    this.initValues();
  }

  initValues(){
    const data = this.data;
    this.id = data.id;
    this.name = data.name;
    this.img = data.sprites.front_default;
    this.weight = data.weight/10+' KG';
    this.height = data.height/10+' m';
    this.types = data.types.map( type => ' '+type.type.name.toString() )
    this.skills = data.moves.map( move => ' '+move.move.name.toString() )
  }


}
