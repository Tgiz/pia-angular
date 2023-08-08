import { Component, Input, numberAttribute, booleanAttribute, EventEmitter, Output } from '@angular/core';
import { MongodbService } from '../service/mongodb.service';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-movie-card', 
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})


export class MovieCardComponent {
  @Input() movie: any;
  @Input() isdelete: boolean = false;
  @Input() set selectedMovies(value: any) {
    this.movie.isWatchlist= value.some((val_: any)=>this.movie.id === JSON.parse(val_.movie).id)
  }
  @Output() addMovie= new EventEmitter<any>();
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
      this.addMovie.emit(true)
    })
  }

  removeFromWatchlist(movie: any) {
  this.deleteMovie.emit(movie)

  }



}

