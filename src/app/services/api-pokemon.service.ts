import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Observable, map } from 'rxjs';

interface PokemonAPI {
  [name: string]: Pokemon;
}

@Injectable({
  providedIn: 'root',
})
export class ApiPokemonService {
  private urlApi =
    'https://teste-projet-fa608-default-rtdb.europe-west1.firebasedatabase.app/pokemon.json';

  constructor(private http: HttpClient) {}

  PostPokemon(pokemon: Pokemon) {
    this.http.post(this.urlApi, JSON.stringify(pokemon)).subscribe();
  }

  getPokemons(): Observable<any> {
    return this.http.get<PokemonAPI>(this.urlApi).pipe(
      map((response: PokemonAPI) => {
        if (!response) return;
        const keyPokemon = Object.keys(response);
        const tab: Pokemon[] = keyPokemon.map((key) => response[key]);
        return tab;
      })
    );
  }
}
