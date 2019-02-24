import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLogOutComponent } from './user-log-out/user-log-out.component';

const routes: Routes = [
  { path: '', component: UserComponent, children: [
    { path: 'sign-in', component: UserSignInComponent },
    { path: 'sign-up', component: UserSignUpComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'log-out', component: UserLogOutComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
