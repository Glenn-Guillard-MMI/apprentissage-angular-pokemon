import { Component } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { PokemonDetail } from '../../models/api';

@Component({
  selector: 'app-pokemon-whit-api',
  templateUrl: './pokemon-whit-api.component.html',
  styleUrl: './pokemon-whit-api.component.scss',
})
export class PokemonWhitAPIComponent {
  pokemons: PokemonDetail[] = [];
  constructor(private api: PokeapiService) {
    api.getPokemon().subscribe((pokemonResult) => {
      pokemonResult.forEach((element) => {
        api.getFromUrl(element.url).subscribe((rsl: PokemonDetail) => {
          console.log(rsl);
          this.pokemons.push(rsl);
        });
      });
    });
  }
}
