import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent} from'./user-signup/user-signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';




const routes: Routes = [
  {path:'', component: UserLoginComponent},
  {path:'user-login', component: UserLoginComponent},
  {path: 'user-signup', component: UserSignupComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'homepage', component: HomepageComponent}
 
];


@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }