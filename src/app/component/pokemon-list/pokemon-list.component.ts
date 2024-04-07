import { Component } from '@angular/core';

type Gender = 'male' | 'female' | 'unknown';

interface pokemon {
  name: string;
  gender: Gender;
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  newPokemonModel = '';
  lastPokemonAdd = '';
  pekemonExistName = '';

  Gender: Gender[] = ['male', 'female', 'unknown'];
  listPokemon: pokemon[] = [
    {
      name: 'pikachu',
      gender: 'male',
    },
  ];

  pokemonExist(namePokemon: string): any {
    const pokemonSameName = this.listPokemon.some((pokemon) => {
      return namePokemon == pokemon.name;
    });
    return pokemonSameName;
  }

  addPokemon() {
    if (this.pokemonExist(this.newPokemonModel)) {
      this.pekemonExistName = this.newPokemonModel;
      this.closePopUpTime();
      return;
    }

    const newGender = this.Gender[Math.round(Math.random())];
    const newPkm: pokemon = {
      name: this.newPokemonModel,
      gender: newGender,
    };
    this.listPokemon.push(newPkm);
    this.lastPokemonAdd = this.newPokemonModel;
    this.newPokemonModel = '';
    this.closePopUpTime();
  }

  closePopUpTime() {
    setTimeout(() => {
      this.lastPokemonAdd = '';
      this.pekemonExistName = '';
    }, 5000);
  }
}
