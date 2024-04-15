import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pokemonAPI } from '../models/pokemon';
import { map } from 'rxjs';
import { PokemonDetail } from '../models/api';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private http: HttpClient) {}
  private api = 'https://pokeapi.co/api/v2/pokemon';
  getPokemons() {
    return this.http
      .get<pokemonAPI>(this.api)
      .pipe(map((rslt) => rslt.results));
  }

  getFromUrl(url: string) {
    return this.http.get<PokemonDetail>(url);
  }
}
