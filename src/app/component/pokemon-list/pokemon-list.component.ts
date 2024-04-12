import { Component } from '@angular/core';
import { Gender, pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  newPokemonModel = '';
  lastPokemonAdd = '';
  pekemonExistName = '';

  Gender: Gender[] = ['male', 'female'];
  listPokemon: pokemon[] = [];

  constructor() {
    if (localStorage.getItem('pokemon') == null) {
      localStorage.setItem('pokemon', JSON.stringify(this.listPokemon));
    }
    this.loadPokemonWithLocalStorage();
  }

  createPokemonLocalStorage() {
    localStorage.setItem('pokemon', JSON.stringify(this.listPokemon));
  }

  loadPokemonWithLocalStorage() {
    const getLocalPokemon: any = localStorage.getItem('pokemon');
    this.listPokemon = JSON.parse(getLocalPokemon);
  }

  pokemonExist(namePokemon: string): any {
    const pokemonSameName = this.listPokemon?.some((pokemon) => {
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
    this.createPokemonLocalStorage();
    this.loadPokemonWithLocalStorage();
  }

  closePopUpTime() {
    setTimeout(() => {
      this.lastPokemonAdd = '';
      this.pekemonExistName = '';
    }, 5000);
  }

  deletePokemonTab(pokemon: number) {
    this.listPokemon.splice(pokemon, 1);
    this.createPokemonLocalStorage();
  }
}
