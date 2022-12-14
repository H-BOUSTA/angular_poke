import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl : 'app.component.html'

})
export class AppComponent implements OnInit {
  // title = 'ng-pokemon-app';
  pokemonList: Pokemon [] = POKEMONS;
  pokemonSelected : Pokemon|undefined;

  constructor() {

  }
  ngOnInit() {
  console.table(this.pokemonList) ;
  }

  selectPokemon(pokemonId : string){
    const id = +pokemonId;
    const pokemon : Pokemon| undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId) ;
    if(pokemon){
      console.log(`vous avez cliqué sur le Pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`vous avez demandé un Pokemon qui n'existe pas `);
      this.pokemonSelected = pokemon;
    }
 }


}
