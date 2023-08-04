import { Injectable } from '@angular/core';

 

@Injectable({

  providedIn: 'root',

})

export class WatchlistService {

  private watchlist: any[] = [];

 

  addToWatchlist(movie: any) {

    if (!this.isInWatchlist(movie)) {

      this.watchlist.push(movie);

    }

  }

  removeFromWatchlist(movie: any) {

    const index = this.watchlist.findIndex((m) => m.id === movie.id);

    if (index !== -1) {

      this.watchlist.splice(index, 1);

    }

  }


  getWatchlist() {

    return this.watchlist;

  }


  isInWatchlist(movie: any) {

    return this.watchlist.some((m) => m.id === movie.id);

  }

}

 