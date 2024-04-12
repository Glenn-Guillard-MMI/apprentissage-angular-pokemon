import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrl: './my-pokemon.component.scss',
})
export class MyPokemonComponent {
  @Input() name?: string;
  @Input() gender?: string;
  @Output() deletePokemon = new EventEmitter();

  listeTypes = ['plante', 'feu', 'eau'];
  noPossibilityChangeNamePokemon = false;

  type = this.randomList(this.listeTypes);

  changeNamePokemon() {
    this.noPossibilityChangeNamePokemon = true;
  }

  randomList(tab: string[]) {
    return tab[Math.floor(Math.random() * tab.length)];
  }
}
