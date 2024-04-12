import { Component, EventEmitter, Input, Output } from '@angular/core';
import { pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.scss',
})
export class PokemonItemComponent {
  @Input() pokemon?: pokemon;
  @Output() deletePokemon = new EventEmitter();
}
