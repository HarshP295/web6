import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common'; // Add this import

@Component({
  selector: 'app-pokemon-list',
  standalone: true, // Add this if using standalone
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemon: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.pokemon = await this.apiService.getPokemon();
    } catch (err) {
      this.error = 'Failed to fetch Pokémon data';
    } finally {
      this.loading = false;
    }
  }
}