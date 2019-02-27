import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';

@NgModule({
  declarations: [
    UserComponent,
    UserSigninComponent,
    UserSignupComponent,
    UserProfileComponent,
    UserLogoutComponent,
    UserSignupComponent,
    UserSigninComponent,
    UserLogoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UserComponent,
    UserSigninComponent,
    UserSignupComponent,
    UserProfileComponent,
    UserLogoutComponent
  ]
})
export class UserModule { }
