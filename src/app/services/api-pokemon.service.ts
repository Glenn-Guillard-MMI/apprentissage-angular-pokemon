import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pokemon } from '../models/pokemon';
import { Observable, map } from 'rxjs';

interface PokemonAPI {
  [name: string]: pokemon;
}

@Injectable({
  providedIn: 'root',
})
export class ApiPokemonService {
  private urlApi =
    'https://teste-projet-fa608-default-rtdb.europe-west1.firebasedatabase.app/pokemon.json';

  constructor(private http: HttpClient) {}

  PostPokemon(pokemon: pokemon) {
    this.http.post(this.urlApi, JSON.stringify(pokemon)).subscribe();
  }

  getPokemon(): Observable<any> {
    return this.http.get<PokemonAPI>(this.urlApi).pipe(
      map((response: PokemonAPI) => {
        if (response) return;
        const keyPokemon = Object.keys(response);
        const tab: pokemon[] = keyPokemon.map((key) => {
          return response[key];
        });
        return tab;
      })
    );
  }
}
