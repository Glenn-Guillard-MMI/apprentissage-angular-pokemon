import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './component/pokemon-list/pokemon-list.component';
import { PokemonItemComponent } from './component/pokemon-item/pokemon-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PokemonPopUpComponent } from './component/pokemon-pop-up/pokemon-pop-up.component';
import { MyPokemonComponent } from './component/my-pokemon/my-pokemon.component';
import { ViewPokemonComponent } from './component/view-pokemon/view-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonWhitAPIComponent } from './component/pokemon-whit-api/pokemon-whit-api.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonItemComponent,
    PokemonPopUpComponent,
    MyPokemonComponent,
    ViewPokemonComponent,
    PokemonWhitAPIComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
