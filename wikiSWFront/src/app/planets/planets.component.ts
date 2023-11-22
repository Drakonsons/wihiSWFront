import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent implements OnInit {
  planetsData: any;
  searchQuery: string = '';
  expandedCardIndex: number | null = null;
  isLoading: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadPlanets();
  }

  searchPlanets() {
    this.loadPlanets(this.searchQuery);
  }

  toggleCard(index: number) {
    this.planetsData.results[index].expanded =
      !this.planetsData.results[index].expanded;

    this.expandedCardIndex = this.planetsData.results[index].expanded
      ? index
      : null;
  }

  private loadPlanets(searchQuery: string | null = null) {
    this.apiService.getPlanets(searchQuery).subscribe((data) => {
      this.planetsData = data;

      if (this.planetsData.results) {
        this.planetsData.results.forEach((planets: { expanded: boolean }) => {
          planets.expanded = false;
        });
      }
      this.isLoading = false;
    });
  }
}
