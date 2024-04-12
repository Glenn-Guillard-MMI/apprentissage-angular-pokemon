import { Component } from '@angular/core';
import { Gender, pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

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

  closePopUpTime() {
    setTimeout(() => {
      this.lastPokemonAdd = '';
      this.pekemonExistName = '';
    }, 5000);
  }
}
