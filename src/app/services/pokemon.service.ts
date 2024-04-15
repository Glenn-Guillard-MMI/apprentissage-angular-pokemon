import { Injectable } from '@angular/core';
import {
  Gender,
  LocalPokemon,
  Pokemon,
  PokemonType,
  Type,
} from '../models/pokemon';
import { ApiPokemonService, PokemonAPI } from './api-pokemon.service';
import { delay, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  genders: Gender[] = ['male', 'female'];
  listPokemon: Pokemon[] = [];
  static loadPokemon = true;
  constructor(private apiPokemon: ApiPokemonService) {
    this.getPokemons().subscribe();
  }

  get staticLoadPokemon() {
    return PokemonService.loadPokemon;
  }

  getPokemons() {
    return this.apiPokemon.getPokemons().pipe(
      tap((pokemons: [Pokemon[], boolean]) => {
        this.listPokemon = pokemons[0];
        PokemonService.loadPokemon = pokemons[1];
      })
    );
  }

  // createPokemonLocalStorage() {
  //   localStorage.setItem('pokemon', JSON.stringify(this.listPokemon));
  // }

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
  addPokemon(newPokemon: string, pokemonTypeName: string[]) {
    const newTypes = pokemonTypeName.map((pokemonTypeName: string) => {
      console.log(pokemonTypeName);
      const type = PokemonType.find((type) => {
        return type.name == pokemonTypeName;
      });
      return type;
    }) as Type[];
    if (this.pokemonExist(newPokemon)) {
      return null;
    }
    const newGender = this.genders[Math.round(Math.random())];

    const newPkm: LocalPokemon = {
      name: newPokemon,
      gender: newGender,
      types: newTypes,
    };

    // this.createPokemonLocalStorage();
    this.loadPokemonWithLocalStorage();
    this.apiPokemon.PostPokemon(newPkm).subscribe((rsl: any) => {
      const newPokemonId: Pokemon = { ...newPkm, id: rsl.name };
      const listeActuel = this.listPokemon;
      console.log(listeActuel);
      console.log(newPokemonId);
      this.listPokemon = [newPokemonId, ...listeActuel];
    });
    return newPokemon;
  }

  deletePokemonTab(pokemon: number) {
    this.apiPokemon.deletePokemon(this.listPokemon[pokemon].id).subscribe();
    this.listPokemon.splice(pokemon, 1);
  }
}
