import { Component } from "@angular/core";
import { Router } from '@angular/router' ;
import { MongodbService } from "../service/mongodb.service";


@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']

})

export class UserLoginComponent{
    formdata:any={};
  constructor(private router: Router, private mongodbService: MongodbService){}
  

  
    onUserLoginSuccess(){
        const data={
            username: this.formdata.username,
            password: this.formdata.password
        }
        this.mongodbService.login(data).subscribe((res:any)=>{
            alert(res?.message)
          this.router.navigateByUrl('/homepage');  
    } ) 
   
}
}
