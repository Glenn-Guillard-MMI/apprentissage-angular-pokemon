import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gender, pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.scss',
})
export class PokemonItemComponent {
  @Input() name?: string;
  @Input() gender?: Gender;
  @Output() deletePokemon = new EventEmitter();
}
