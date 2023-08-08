import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

import { MovieService } from '../service/movies.service';

import { MongodbService } from '../service/mongodb.service';

import { NgFor } from '@angular/common';




@Component({

  selector: 'app-homepage',

  templateUrl: './homepage.component.html', 

  styleUrls: ['./homepage.component.css'],

})

export class HomepageComponent implements OnInit {

  movies: any[]=[];
  selectedMovies: any;
  isLoading: boolean = false;
  moviePosters: string[] = [];
  isError: boolean = false;


  private pageNumber: number = 1;
  myUserInfo:any = localStorage.getItem("myUserInfo");
  userId = JSON.parse(this.myUserInfo)?.id;


  constructor(private movieService: MovieService,
    private mongodbService: MongodbService) {}

    
  

  ngOnInit(): void {

    this.fetchData();
    this.getWatchlist();

  }

  changeWatchlist(value: boolean){
    if(value){
      this.getWatchlist()
    }

  }
  getWatchlist(){
    this.mongodbService.getWatchList(this.userId).subscribe(data => {
      this.selectedMovies = data;
      console.log(this.selectedMovies);
      console.log(this.movies);
    });
  }

  isMovieInWatchlist(movie: any): boolean {
      return this.selectedMovies.some((selectedMovie: any) => selectedMovie.movie.id === movie.id);
    }
    
    toggleWatchlist(movie: any) {
      if (this.isMovieInWatchlist(movie)) {
        // Remove the movie from the watchlist
        this.mongodbService.removeFromWatchList(movie);
      } else {
        // Add the movie to the watchlist
        this.mongodbService.addWatchList(movie);
      }
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