// api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://swapi.dev/api';

  constructor(private httpClient: HttpClient) {}

  getFilms(searchQuery: string | null = null): Observable<any> {
    const url = searchQuery
      ? `${this.apiUrl}/films/?search=${searchQuery}`
      : `${this.apiUrl}/films`;
    return this.httpClient.get(url);
  }

  getPeople(searchQuery: string | null = null): Observable<any> {
    const url = searchQuery
      ? `${this.apiUrl}/people/?search=${searchQuery}`
      : `${this.apiUrl}/people`;
    return this.httpClient.get(url);
  }

  getPlanets(searchQuery: string | null = null): Observable<any> {
    const url = searchQuery
      ? `${this.apiUrl}/planets/?search=${searchQuery}`
      : `${this.apiUrl}/planets`;
    return this.httpClient.get(url);
  }

  getSpecies(searchQuery: string | null = null): Observable<any> {
    const url = searchQuery
      ? `${this.apiUrl}/species/?search=${searchQuery}`
      : `${this.apiUrl}/species`;
    return this.httpClient.get(url);
  }

  getStarships(searchQuery: string | null = null): Observable<any> {
    const url = searchQuery
      ? `${this.apiUrl}/starships/?search=${searchQuery}`
      : `${this.apiUrl}/starships`;
    return this.httpClient.get(url);
  }

  getVehicles(searchQuery: string | null = null): Observable<any> {
    const url = searchQuery
      ? `${this.apiUrl}/vehicles/?search=${searchQuery}`
      : `${this.apiUrl}/vehicles`;
    return this.httpClient.get(url);
  }
}
