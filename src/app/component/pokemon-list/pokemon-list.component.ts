import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  newPokemonModel = '';

  listPokemon: string[] = ['pikachu', 'salaméche'];

  addPokemon() {
    console.log(this.newPokemonModel);
    this.listPokemon.push(this.newPokemonModel);
    this.newPokemonModel = '';
  }
}
