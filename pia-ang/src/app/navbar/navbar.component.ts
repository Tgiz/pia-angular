import { Component, EventEmitter, Output } from '@angular/core';

import { MovieService } from '../service/movies.service';

 

@Component({

  selector: 'app-navbar',

  templateUrl: './navbar.component.html',

  styleUrls: ['./navbar.component.css']

})

export class NavbarComponent {

  searchText: string = '';

  @Output() movieData = new EventEmitter<any>();

 

  constructor(private movieService: MovieService) {}

    searchMovies(event: Event) {

    const query = (event.target as HTMLInputElement).value;

    if (query.trim() !== '') {

      this.movieService.searchMovies(query).subscribe({

        next: (data: any) => {

          this.movieData.emit(data);

          console.log(data);

        },

        error: (error: any) => {

          console.error('Error while searching for movies:', error);

        },

        complete: () => {

          console.log('Search complete!');

        }

      });

    }

    else {

    }

  }

}

 