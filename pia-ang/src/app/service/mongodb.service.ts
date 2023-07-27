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
  
  
}
