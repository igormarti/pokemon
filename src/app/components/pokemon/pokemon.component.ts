import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import Pokemon from 'src/app/interfaces/pokemon.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon:Pokemon;
  loading:boolean = false;

  constructor(public pokemon_service:PokemonService,public toast:ToastrService) { }

  ngOnInit(): void {
   
  }

  findPokemon(event,value){
    event.preventDefault();
    if(value.trim()!==''){
      this.loading = true;
      const pokemon = value.toLowerCase();

      this.pokemon_service.getPokemon(pokemon).subscribe(
        (pokemon:Pokemon)=> {
          console.log(pokemon)
          this.pokemon = pokemon
        },
        (err) => this.toast.error('Pokemon not found.',''),
        () =>  this.loading = false
      )
    }else{
      this.toast.error('Tell a pokemon.','')
    }
  }

}
