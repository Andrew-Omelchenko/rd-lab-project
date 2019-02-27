import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';

const routes: Routes = [
  { path: '', component: UserComponent, children: [
    { path: 'signin', component: UserSigninComponent },
    { path: 'signup', component: UserSignupComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'logout', component: UserLogoutComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
