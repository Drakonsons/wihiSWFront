import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css'],
})
export class SpeciesComponent implements OnInit {
  speciesData: any;
  searchQuery: string = '';
  expandedCardIndex: number | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadSpecies();
  }

  searchSpecies() {
    this.loadSpecies(this.searchQuery);
  }

  toggleCard(index: number) {
    this.speciesData.results[index].expanded =
      !this.speciesData.results[index].expanded;

    this.expandedCardIndex = this.speciesData.results[index].expanded
      ? index
      : null;
  }

  private loadSpecies(searchQuery: string | null = null) {
    this.apiService.getSpecies(searchQuery).subscribe((data) => {
      this.speciesData = data;

      this.speciesData.results.forEach((species: { expanded: boolean }) => {
        species.expanded = false;
      });
    });
  }
}
