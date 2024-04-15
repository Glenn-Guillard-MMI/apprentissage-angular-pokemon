import { Type } from './../../models/pokemon';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrl: './my-pokemon.component.scss',
})
export class MyPokemonComponent {
  @Input() name?: string;
  @Input() gender?: string;
  @Input() type?: Type[];
  @Output() deletePokemon = new EventEmitter();

  noPossibilityChangeNamePokemon = false;

  changeNamePokemon() {
    this.noPossibilityChangeNamePokemon = true;
  }

  randomList(tab: string[]) {
    return tab[Math.floor(Math.random() * tab.length)];
  }
}
