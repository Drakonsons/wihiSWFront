import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  filmsData: any;
  searchQuery: string = '';
  expandedCardIndex: number | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadFilms();
  }

  searchFilms() {
    this.loadFilms(this.searchQuery);
  }

  toggleCard(index: number) {
    this.filmsData.results[index].expanded =
      !this.filmsData.results[index].expanded;

    this.expandedCardIndex = this.filmsData.results[index].expanded
      ? index
      : null;
  }

  private loadFilms(searchQuery: string | null = null) {
    this.apiService.getFilms(searchQuery).subscribe((data) => {
      this.filmsData = data;

      this.filmsData.results.forEach((film: { expanded: boolean }) => {
        film.expanded = false;
      });
    });
  }
}
