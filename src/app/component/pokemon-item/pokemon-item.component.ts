import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gender } from '../../models/pokemon';

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
