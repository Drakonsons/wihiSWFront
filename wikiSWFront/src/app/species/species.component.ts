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

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadSpecies();
  }

  searchSpecies() {
    this.loadSpecies(this.searchQuery);
  }

  private loadSpecies(searchQuery: string | null = null) {
    this.apiService.getSpecies(searchQuery).subscribe((data) => {
      this.speciesData = data;
    });
  }
}
