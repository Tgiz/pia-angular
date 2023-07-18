import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent} from'./user-signup/user-signup.component';



const routes: Routes = [
  {path:'user-login', component: UserLoginComponent},
  {path: 'user-signup', component: UserSignupComponent}
 
];


@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }