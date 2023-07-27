import { Component, HostListener, OnInit } from '@angular/core';

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

  isError: boolean = false;


  private pageNumber: number = 1;

  constructor(private movieService: MovieService) {}




  ngOnInit(): void {

    this.fetchData();

  }




  @HostListener('window:scroll', ['$event'])

  onScroll(): void {

    const pos = (document.documentElement.scrollTop || document.body.scrollTop)

    const max = document.body.scrollHeight - document.documentElement.clientHeight;

    console.log(pos, max);

    if (pos > max) {

      this.pageNumber++;

      this.fetchData();

      document.scrollingElement?.scrollTo(0, pos - 50);

    }

  }


  private fetchData(): void {

    this.isLoading = true;


    this.movieService.getWeeklyTrendMovies(this.pageNumber).subscribe(

      (data: any) => {

        console.log(data);

        this.isLoading = false;

        this.movies = data.results

      },

      (error: any) => {

        this.isLoading = false;

        this.isError = true;

        console.error('Error fetching data:', error);

      }

    );

  }

}