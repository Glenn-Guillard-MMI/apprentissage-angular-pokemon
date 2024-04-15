import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map, tap } from 'rxjs';
import { LocalPokemon, Pokemon } from '../models/pokemon';
import { PokemonService } from './pokemon.service';

export interface PokemonAPI {
  [name: string]: Pokemon;
}

@Injectable({
  providedIn: 'root',
})
export class ApiPokemonService {
  private urlApi =
    'https://teste-37c5e-default-rtdb.europe-west1.firebasedatabase.app';
  private timeLoader = 1500;
  constructor(private http: HttpClient) {}
  //-----------------------------------------------
  PostPokemon(pokemon: LocalPokemon) {
    return this.http.post(
      `${this.urlApi}/pokemon.json`,
      JSON.stringify(pokemon)
    );
  }
  //-----------------------------------------------
  getPokemons(): Observable<any> {
    if (!PokemonService.loadPokemon) {
      this.timeLoader = 0;
    }
    return this.http.get<PokemonAPI>(`${this.urlApi}/pokemon.json`).pipe(
      delay(this.timeLoader),
      map((response: PokemonAPI) => {
        if (!response) return [[], false];
        const keyPokemon = Object.keys(response);
        const tab: LocalPokemon[] = keyPokemon.map((key: string) => {
          const pokemonWhitNoId = response[key];
          return { ...pokemonWhitNoId, id: key };
        });
        return [tab, false];
      })
    );
  }
  //-----------------------------------------------

  deletePokemon(pokemon: string) {
    console.log(pokemon);
    return this.http.delete(`${this.urlApi}/pokemon/${pokemon}.json`);
  }
}
