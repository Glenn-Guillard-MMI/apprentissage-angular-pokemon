import { Injectable } from '@angular/core';
import { Gender, pokemon } from '../models/pokemon';
import { ApiPokemonService } from './api-pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  Gender: Gender[] = ['male', 'female'];

  constructor(private apiPokemon: ApiPokemonService) {
    this.apiPokemon.getPokemon().subscribe((response) => {
      this.listPokemon.push(JSON.parse(response));
    });
    console.log(this.listPokemon);
  }
  listPokemon: pokemon[] = [];
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
    const newGender = this.Gender[Math.round(Math.random())];
    const newPkm: pokemon = {
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
