import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
})
export class StarshipsComponent implements OnInit {
  starshipsData: any;
  searchQuery: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadStarships();
  }

  searchStarships() {
    this.loadStarships(this.searchQuery);
  }

  private loadStarships(searchQuery: string | null = null) {
    this.apiService.getStarships(searchQuery).subscribe((data) => {
      this.starshipsData = data;
    });
  }
}
