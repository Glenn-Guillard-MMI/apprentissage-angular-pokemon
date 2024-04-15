export type Gender = 'male' | 'female' | 'unknown';

export interface LocalPokemon {
  name: string;
  gender: Gender;
  types: Type[];
}

export type Type = {
  name: string;
  color: string;
};

export const PokemonType: Type[] = [
  { name: 'normal', color: '#A0A2A0' },
  { name: 'Combat', color: '#FF8100 ' },
  { name: 'Vol', color: '#82BAEF ' },
  { name: 'Acier', color: '#60A2B9 ' },
  { name: 'Dragon', color: '#4F60E2 ' },
  { name: 'Eau', color: '#2481EF' },
  { name: 'Fée', color: '#EF70EF' },
  { name: 'Feu', color: '#E72324' },
  { name: 'Glace', color: '#3DD9FF' },
  { name: 'Insect', color: '#92A212' },
  { name: 'Plante', color: '#3DA224' },
  { name: 'Poison', color: '#923FCC' },
  { name: 'Psy', color: '#EF3F7A ' },
  { name: 'Roche', color: '#B0AA82 ' },
  { name: 'Sol', color: '#92501B ' },
  { name: 'Spectre', color: '#703F70 ' },
  { name: 'Ténèbres', color: '#4F3F3D ' },
  { name: 'Inconnu', color: '#68a090 ' },
  { name: 'Obscure', color: 'black' },
];

export interface Pokemon extends LocalPokemon {
  id: string;
}

export interface pokemonAPI {
  count: number;
  next: string | null;
  previous: string | null;
  results: [{ name: string; url: string }];
}

export interface pokemonBasic {
  name: string;
  url: string;
}
