import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-pop-up',
  template: `
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        class="toast"
        [ngClass]="{ show: pokemon || pokemonExist }"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <ng-container *ngIf="pokemon">
            <strong class="me-auto">New pokemon</strong>
          </ng-container>
          <ng-container *ngIf="pokemonExist">
            <strong class="me-auto">Error pokemon</strong>
          </ng-container>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
            (click)="closePopUp()"
          ></button>
        </div>
        <ng-container *ngIf="pokemon">
          <div class="toast-body">Le pokemon {{ pokemon }} a été ajouté</div>
        </ng-container>
        <ng-container *ngIf="pokemonExist">
          <div class="toast-body">
            Le pokemon {{ pokemonExist }} existe déjà
          </div>
        </ng-container>
      </div>
    </div>
  `,
})
export class PokemonPopUpComponent {
  @Input() pokemon?: string;
  @Input() pokemonExist?: string;

  closePopUp() {
    this.pokemon = '';
    this.pokemonExist = '';
  }
}
