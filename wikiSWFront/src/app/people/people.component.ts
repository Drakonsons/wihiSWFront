import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  peopleData: any;
  searchQuery: string = '';
  expandedCardIndex: number | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadPeople();
  }

  searchPeople() {
    this.loadPeople(this.searchQuery);
  }

  toggleCard(index: number) {
    this.peopleData.results[index].expanded =
      !this.peopleData.results[index].expanded;

    this.expandedCardIndex = this.peopleData.results[index].expanded
      ? index
      : null;
  }

  private loadPeople(searchQuery: string | null = null) {
    this.apiService.getPeople(searchQuery).subscribe((data) => {
      this.peopleData = data;

      this.peopleData.results.forEach((people: { expanded: boolean }) => {
        people.expanded = false;
      });
    });
  }
}
