import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

import { MovieService } from '../service/movies.service';

import { NgFor } from '@angular/common';




@Component({

  selector: 'app-homepage',

  templateUrl: './homepage.component.html',

  styleUrls: ['./homepage.component.css'],

})

export class HomepageComponent implements OnInit {

  movies: any[]=[];
  isLoading: boolean = false;
  moviePosters: string[] = [];
  isError: boolean = false;


  private pageNumber: number = 1;

  constructor(private movieService: MovieService) {}




  ngOnInit(): void {

    this.fetchData();

  }


  onScroll(): void {

    this.pageNumber++;

    this.fetchData();

  }


  private fetchData(): void {

    this.isLoading = true;

    this.movieService.getWeeklyTrendMovies(this.pageNumber).subscribe(

      (data: any) => {

        console.log(data);

        this.isLoading = false;

        data.results.forEach((element: any) => {

        this.movies.push(element)

        })

      },

      (error: any) => {

        this.isLoading = false;

        this.isError = true;

        console.error('Error fetching data:', error);

      }
      
    );
      
  }
  
  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChanged(){    

    this.searchTextChanged.emit(this.enteredSearchValue);

  }

  getMovieData(event: any) {

    this.movies = event.results;

  }
}