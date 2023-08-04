import { Component, Input, numberAttribute, booleanAttribute, EventEmitter, Output } from '@angular/core';
import { MongodbService } from '../service/mongodb.service';

@Component({
  selector: 'app-movie-card', 
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})


export class MovieCardComponent {
  @Input() movie: any;
  @Input() isdelete: boolean = false;
  @Output() deleteMovie = new EventEmitter<any>();
  
  myUserInfo:any = localStorage.getItem("myUserInfo");
  constructor(private mongodbService: MongodbService) {

  }
  addWatchList(movie: any) {
    if(!this.myUserInfo){
      alert("user not found!!!");
      return;
    }
    const data:any = {
      user: JSON.parse(this.myUserInfo)?.id,
      movie: JSON.stringify(movie),
      like: false
    }
    this.mongodbService.addWatchList(data).subscribe(res=> {
      console.log(res);
    })
  }

  


  removeFromWatchlist(movie: any) {
  this.deleteMovie.emit(movie)

  }
}

