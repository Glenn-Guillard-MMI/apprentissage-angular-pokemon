import { Component } from '@angular/core';
import { ApiPokemonService } from '../../services/api-pokemon.service';

@Component({
  selector: 'app-view-pokemon',
  template: `<div class="container-fluid mt-5">
    <h1 class="title bg-success fit-container p-2 text-light rounded">
      My Pokedex
    </h1>
    <router-outlet></router-outlet>
  </div> `,
  styleUrl: './view-pokemon.component.scss',
})
export class ViewPokemonComponent {}
