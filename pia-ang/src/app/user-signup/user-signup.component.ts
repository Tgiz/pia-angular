import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MongodbService } from '../service/mongodb.service';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {
  formdata:any={};
  constructor(private router: Router, private mongodbService: MongodbService){}
  
    
  onUserSignupSuccess(){
    const data={
      username: this.formdata.username,
      firstname: this.formdata.firstname,
      lastname: this.formdata.lastname,
      password: this.formdata.password,
      email: this.formdata.email
    }
    this.mongodbService.signup(data).subscribe((res:any)=>{
      alert(res?.message)
    }) 
      this.router.navigateByUrl('/user-login');
  }
}
