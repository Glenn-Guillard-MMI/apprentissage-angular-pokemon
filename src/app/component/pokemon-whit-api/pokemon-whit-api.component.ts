import { Component } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { PokemonDetail } from '../../models/api';
import { Observable, from, mergeMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-pokemon-whit-api',
  templateUrl: './pokemon-whit-api.component.html',
  styleUrl: './pokemon-whit-api.component.scss',
})
export class PokemonWhitAPIComponent {
  pokemons: PokemonDetail[] = [];

  constructor(private api: PokeapiService) {
    api.getPokemons().pipe(
      switchMap((pokemonsResult) => from(pokemonsResult)),
      mergeMap((pokemonResult) => api.getFromUrl(pokemonResult.url)),
    ).subscribe((pokemonDetail) => {
      this.pokemons[pokemonDetail.id - 1] = pokemonDetail;
    });
  }
}
