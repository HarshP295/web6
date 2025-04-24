import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';

  constructor() {}

  async getPokemon(): Promise<any[]> {
    const response = await fetch(this.apiUrl);
    const data = await response.json();
    const pokemonDetails = await Promise.all(
      data.results.map(async (p: any) => {
        const res = await fetch(p.url);
        return await res.json();
      })
    );
    return pokemonDetails;
  }
}