import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  newPokemonModel = '';
  lastPokemonAdd = '';
  pekemonExistName = '';

  constructor(protected pokemonService: PokemonService) {
    if (localStorage.getItem('pokemon') == null) {
      localStorage.setItem(
        'pokemon',
        JSON.stringify(pokemonService.listPokemon)
      );
    }
    pokemonService.loadPokemonWithLocalStorage();
  }

  pokemonAdd(pokemon: string) {
    const addPokemon = this.pokemonService.addPokemon(pokemon);
    if (addPokemon == null) {
      this.pekemonExistName = this.newPokemonModel;
      this.newPokemonModel = '';
      this.closePopUpTime();
    } else {
      this.newPokemonModel = '';
      this.lastPokemonAdd = addPokemon;
      this.closePopUpTime();
    }
  }

  onPokemonAddBtnClick() {
    this.pokemonAdd(this.newPokemonModel);
    this.pokemonService.getPokemons().subscribe((pokemons: Pokemon[]) => {
      console.log("J'ai récupéré les pokémons !!");
    });
  }

  closePopUpTime() {
    setTimeout(() => {
      this.lastPokemonAdd = '';
      this.pekemonExistName = '';
    }, 5000);
  }
}
