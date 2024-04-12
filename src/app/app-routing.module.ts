import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './component/pokemon-list/pokemon-list.component';
import { ViewPokemonComponent } from './component/view-pokemon/view-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: ViewPokemonComponent,
    children: [{ path: '', component: PokemonListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
