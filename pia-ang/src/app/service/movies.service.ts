import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable, OnInit } from '@angular/core';



const apiKey =

  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2QyNGU2ODEwZDg0YjVjMmQyNDkxMjkxMDEzYzk3YiIsInN1YiI6IjYyMzM1MDE5ZDdjZDA2MDA0NTliMDYyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eiv-_1XEQ4v3SLUbd_Jw198NzTP1izolw_V7Muq9REk';


@Injectable({

  providedIn: 'root',

})

export class MovieService {

  private baseUrl = 'https://api.themoviedb.org/3/';

  private headers = {

      'Content-Type': 'application/json',

      Authorization: `Bearer ${apiKey}`,

    };

  constructor(private http: HttpClient) {}



  getWeeklyTrendMovies(page: number) {

   
    const url = `${this.baseUrl}trending/movie/week?page=${page}`;

    return this.http.get(url, { headers: this.headers });

  }

  searchMovies(query: string) {

    const headers = {

      'Content-Type': 'application/json',

      Authorization: `Bearer ${apiKey}`,

    };

    const url = `${this.baseUrl}search/movie?query=${query}`;

    return this.http.get(url, { headers: headers });

  } 

}