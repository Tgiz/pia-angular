import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User{
  username: string;
  password: string;
  email: string;
  firstname: string;
  lastname:string;
}
export interface Login{
  username: string;
  password: string;
  
}
export interface WatchList{
  user: string;
  movie: string;
  like: boolean;
}

@Injectable({

  providedIn: 'root',

})


export class MongodbService {

  private baseUrl = 'http://localhost:3002/';

  private headers = {

      'Content-Type': 'application/json',

      Authorization: `Bearer ${localStorage.getItem("mytoken")}`,

    };

  constructor(private http: HttpClient) {}



  signup(data: User) {

   
    const url = `${this.baseUrl}auth/signup`;

    return this.http.post(url, data);

  }

  login(data: Login){
    const url= `${this.baseUrl}auth/signin`;
    
    return this.http.post(url, data);
  }

  addWatchList(data: WatchList){
    const url = `${this.baseUrl}watchlist`;

    return this.http.post(url, data);
  }

  getWatchList(userId :any){
    const url = `${this.baseUrl}watchlist/${userId}`;

    return this.http.get(url);
  }
  
  removeFromWatchList(movieId : any){
    const url = `${this.baseUrl}watchlist/${movieId}`;
    
    return this.http.delete(url);
  }
}
