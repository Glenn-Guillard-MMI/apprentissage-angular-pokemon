import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPopUpComponent } from './pokemon-pop-up.component';

describe('PokemonPopUpComponent', () => {
  let component: PokemonPopUpComponent;
  let fixture: ComponentFixture<PokemonPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonPopUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
