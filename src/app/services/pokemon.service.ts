import { Injectable } from '@angular/core';
import { Gender, Pokemon } from '../models/pokemon';
import { ApiPokemonService } from './api-pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  genders: Gender[] = ['male', 'female'];
  listPokemon: Pokemon[] = [];

  constructor(private apiPokemon: ApiPokemonService) {
    this.apiPokemon.getPokemons().subscribe((pokemons: Pokemon[]) => {
      this.listPokemon = pokemons;
    });
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
  addPokemon(newPokemon: string) {
    if (this.pokemonExist(newPokemon)) {
      return null;
    }
    const newGender = this.genders[Math.round(Math.random())];
    const newPkm: Pokemon = {
      name: newPokemon,
      gender: newGender,
    };

    this.createPokemonLocalStorage();
    this.loadPokemonWithLocalStorage();
    this.apiPokemon.PostPokemon(newPkm);
    return newPokemon;
  }

  deletePokemonTab(pokemon: number) {
    this.listPokemon.splice(pokemon, 1);
    this.createPokemonLocalStorage();
  }
}
