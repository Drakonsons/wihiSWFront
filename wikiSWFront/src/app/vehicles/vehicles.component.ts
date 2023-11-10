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

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadVehicles();
  }

  searchVehicles() {
    this.loadVehicles(this.searchQuery);
  }

  private loadVehicles(searchQuery: string | null = null) {
    this.apiService.getVehicles(searchQuery).subscribe((data) => {
      this.VehiclesData = data;
    });
  }
}
