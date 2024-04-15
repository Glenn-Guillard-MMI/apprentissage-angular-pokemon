import { PokemonType } from './../../models/pokemon';
import { Component } from '@angular/core';
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
  newPokemonType = '';

  pokemonTypes = PokemonType;
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
    const addPokemon = this.pokemonService.addPokemon(pokemon, [
      this.newPokemonType,
    ]);
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
    this.pokemonService.getPokemons().subscribe();
  }

  closePopUpTime() {
    setTimeout(() => {
      this.lastPokemonAdd = '';
      this.pekemonExistName = '';
    }, 5000);
  }
}
