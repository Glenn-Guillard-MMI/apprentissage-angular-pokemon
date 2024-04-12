import { Component } from '@angular/core';

@Component({
  selector: 'app-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrl: './my-pokemon.component.scss',
})
export class MyPokemonComponent {
  listeNames = ['bulbizzare', 'salameche', 'carapuce'];
  listeTypes = ['plante', 'feu', 'eau'];
  noPossibilityChangeNamePokemon = false;

  name = this.randomList(this.listeNames);
  type = this.randomList(this.listeTypes);

  changeNamePokemon() {
    this.name = this.randomList(this.listeNames);
    this.noPossibilityChangeNamePokemon = true;
  }

  randomList(tab: string[]) {
    return tab[Math.floor(Math.random() * tab.length)];
  }
}
