import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
})
export class VehiclesComponent implements OnInit {
  VehiclesData: any;
  searchQuery: string = '';
  expandedCardIndex: number | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadVehicles();
  }

  searchVehicles() {
    this.loadVehicles(this.searchQuery);
  }

  toggleCard(index: number) {
    this.VehiclesData.results[index].expanded =
      !this.VehiclesData.results[index].expanded;

    this.expandedCardIndex = this.VehiclesData.results[index].expanded
      ? index
      : null;
  }

  private loadVehicles(searchQuery: string | null = null) {
    this.apiService.getVehicles(searchQuery).subscribe((data) => {
      this.VehiclesData = data;

      this.VehiclesData.results.forEach((vehicles: { expanded: boolean }) => {
        vehicles.expanded = false;
      });
    });
  }
}
