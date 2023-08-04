import { Component, OnInit } from '@angular/core';

import { WatchlistService } from '../service/watchlist.service';
import { MongodbService } from '../service/mongodb.service';

 

@Component({

  selector: 'app-watchlist',

  templateUrl: './watchlist.component.html',

  styleUrls: ['./watchlist.component.css']

})

export class WatchlistComponent implements OnInit {

  watchlist: any[] = [];
  myUserInfo:any = localStorage.getItem("myUserInfo");
 

  constructor(private mongodbService: MongodbService) {}

 

  ngOnInit(): void {
   this.mywatchlist()

  }


  mywatchlist(){
    const userId = JSON.parse(this.myUserInfo)?.id;
    this.mongodbService.getWatchList(userId).subscribe((res:any)=>{
      this.watchlist = res.map((wlist:any)=> {
        const movie = JSON.parse(wlist.movie)
        console.log(movie)
        movie.movieId = wlist._id
        return movie
      })
      console.log(this.watchlist)
    })

  }
  
  removeFromWatchlist(movie: any){
    const movieId:any = movie.movieId
      console.log(movie)
      
     
     this.mongodbService.removeFromWatchList(movieId).subscribe(res=> {
       this.mywatchlist()
     })
  }


}