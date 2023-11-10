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

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadPeople(this.searchQuery);
  }

  searchPeople() {
    this.loadPeople(this.searchQuery);
  }

  private loadPeople(searchQuery: string | null = null) {
    this.apiService.getPeople(searchQuery).subscribe((data) => {
      this.peopleData = data;
    });
  }
}
