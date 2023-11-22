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
  expandedCardIndex: number | null = null;
  isLoading: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadStarships();
  }

  searchStarships() {
    this.loadStarships(this.searchQuery);
  }

  toggleCard(index: number) {
    this.starshipsData.results[index].expanded =
      !this.starshipsData.results[index].expanded;

    this.expandedCardIndex = this.starshipsData.results[index].expanded
      ? index
      : null;
  }

  private loadStarships(searchQuery: string | null = null) {
    this.apiService.getStarships(searchQuery).subscribe((data) => {
      this.starshipsData = data;

      if (this.starshipsData.results) {
        this.starshipsData.results.forEach(
          (starships: { expanded: boolean }) => {
            starships.expanded = false;
          }
        );
      }
      this.isLoading = false;
    });
  }
}
