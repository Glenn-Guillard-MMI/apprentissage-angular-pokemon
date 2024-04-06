import { Component } from '@angular/core';

type Gender = 'male' | 'female' | 'unknown';

interface pokemon {
  name: string;
  gender: Gender;
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  newPokemonModel = '';
  Gender: Gender[] = ['male', 'female', 'unknown'];
  listPokemon: pokemon[] = [
    {
      name: 'pikachu',
      gender: 'male',
    },
  ];

  addPokemon() {
    const newGender = this.Gender[Math.round(Math.random())];
    const newPkm: pokemon = {
      name: this.newPokemonModel,
      gender: newGender,
    };
    this.listPokemon.push(newPkm);
    this.newPokemonModel = '';
  }
}
