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

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadPlanets();
  }

  searchPlanets() {
    this.loadPlanets(this.searchQuery);
  }

  private loadPlanets(searchQuery: string | null = null) {
    this.apiService.getPlanets(searchQuery).subscribe((data) => {
      this.planetsData = data;
    });
  }
}
